import { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { updateEmail, updateProfile, sendPasswordResetEmail, reauthenticateWithCredential, EmailAuthProvider, signOut, sendEmailVerification } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import PageLayout from '../Components/PageLayout';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [userID, setUserID] = useState('');
  const [language, setLanguage] = useState('');
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [signedOut, setSignedOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setName(user.displayName);
        setEmail(user.email);
        setSignedOut(false);
      } else {
        navigate('/signin');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  };

  const handleVerifyNewEmail = async () => {
    try {
      const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      await sendEmailVerification(auth.currentUser, { url: window.location.href }).then(() => {
        alert('Verification email sent to new address. Please verify and then update.');
      });
    } catch (error) {
      console.error("Error verifying new email: ", error);
      if (error.code === 'auth/wrong-password') {
        alert('Current password is incorrect. Please try again.');
      } else {
        alert(`Error verifying email: ${error.message}`);
      }
    }
  };

  const handleUpdateEmail = async () => {
    try {
      const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updateEmail(auth.currentUser, newEmail);
      alert('Email updated successfully. Please check your new email for verification.');
    } catch (error) {
      console.error("Error updating email: ", error);
      if (error.code === 'auth/wrong-password') {
        alert('Current password is incorrect. Please try again.');
      } else if (error.code === 'auth/invalid-email') {
        alert('The email address is badly formatted.');
      } else if (error.code === 'auth/email-already-in-use') {
        alert('The new email address is already in use by another account.');
      } else if (error.code === 'auth/operation-not-allowed') {
        alert('Please verify the new email before changing email.');
      } else {
        alert(`Error updating email: ${error.message}`);
      }
    }
  };

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent. Please check your email.');
    } catch (error) {
      console.error("Error sending password reset email: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setSignedOut(true);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <PageLayout pageTitle="Dashboard">
      <div className="flex h-screen">
        {/* Sidebar */}
        <nav className="w-64 bg-[#5f5f6b] text-white p-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>
          <ul>
            <li className="mb-4">
              <Link to="/Shop" className="text-white hover:text-gray-300">Products</Link>
            </li>
            <li className="mb-4">
              <Link to="/cart" className="text-white hover:text-gray-300">Orders</Link>
            </li>
            <li className="mb-4">
              <Link to="/customers" className="text-white hover:text-gray-300">Customers</Link>
            </li>
          </ul>
          <button
            onClick={handleSignOut}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              Welcome, {signedOut ? 'Sign In' : user?.email}
            </h1>
          </header>
          <div className="content">
            {/* Profile Update Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Update Profile</h2>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">User ID</label>
                <input 
                  type="text" 
                  value={userID} 
                  onChange={(e) => setUserID(e.target.value)} 
                  className="p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Language</label>
                <input 
                  type="text" 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)} 
                  className="p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <button
                onClick={handleUpdateProfile}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Update Profile
              </button>
            </div>

            {/* Email Update Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Update Email</h2>
              <div className="mb-4">
                <label className="block mb-2">New Email</label>
                <input 
                  type="email" 
                  value={newEmail} 
                  onChange={(e) => setNewEmail(e.target.value)} 
                  className="p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Current Password</label>
                <input 
                  type="password" 
                  value={currentPassword} 
                  onChange={(e) => setCurrentPassword(e.target.value)} 
                  className="p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <button
                onClick={handleVerifyNewEmail}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded"
              >
                Verify New Email
              </button>
              <button
                onClick={handleUpdateEmail}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded"
              >
                Update Email
              </button>
            </div>

            {/* Reset Password Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Reset Password</h2>
              <button
                onClick={handleResetPassword}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                Reset Password
              </button>
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
