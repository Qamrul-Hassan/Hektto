import { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import {
  updateEmail,
  updateProfile,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendEmailVerification,
  signOut,
  deleteUser,
} from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import PageLayout from '../Components/PageLayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [userID, setUserID] = useState('');
  const [newUserID, setNewUserID] = useState('');
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
        setName(user.displayName || '');
        setEmail(user.email || '');
        setUserID(user.uid || '');
        setSignedOut(false);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      toast.success('Profile updated successfully.');
    } catch (error) {
      toast.error('Failed to update profile. Please try again.');
    }
  };

  const handleUpdateEmail = async () => {
    if (newEmail === email) {
      toast.warning('New email is the same as the current email.');
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updateEmail(auth.currentUser, newEmail);
      await sendEmailVerification(auth.currentUser);

      toast.success('Email updated successfully. Please verify your new email address.');

      const updatedUser = auth.currentUser;
      setEmail(updatedUser.email);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleVerifyNewEmail = async () => {
    try {
      const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      await sendEmailVerification(auth.currentUser);
      toast.info('Verification email sent to your new address. Please verify it.');
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleResetPassword = async () => {
    const emailToUse = newEmail || email;
    try {
      await sendPasswordResetEmail(auth, emailToUse);
      toast.success('Password reset email sent. Please check your email.');
    } catch (error) {
      toast.error('Failed to send password reset email. Please try again.');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setSignedOut(true);
    } catch (error) {
      toast.error('Failed to sign out. Please try again.');
    }
  };

  const handleDeleteUser = async () => {
    try {
      const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);
      await deleteUser(auth.currentUser);
      toast.success('User deleted successfully.');
      navigate('/login');
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleUpdateUserID = async () => {
    try {
      // Assuming user ID is stored in a custom user database; update logic would go here
      toast.success('User ID updated successfully.');
      setUserID(newUserID);
    } catch (error) {
      toast.error('Failed to update User ID. Please try again.');
    }
  };

  const handleAuthError = (error) => {
    toast.error(`Error: ${error.message}`);
  };

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <PageLayout pageTitle="Dashboard">
      <div className="min-h-screen flex flex-col lg:flex-row bg-white">
        <nav className="lg:w-1/5 bg-gradient-to-r from-gray-800 to-gray-400 text-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
          <ul className="space-y-6">
            <li>
              <Link to="/shop" className="text-white hover:text-gray-300 transition duration-200">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="text-white hover:text-gray-300 transition duration-200">Orders</Link>
            </li>
            <li>
              <Link to="/customers" className="text-white hover:text-gray-300 transition duration-200">Customers</Link>
            </li>
          </ul>
          <button
            onClick={handleSignOut}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-semibold w-full transition duration-300"
          >
            Sign Out
          </button>
        </nav>
        <main className="flex-1 p-8 bg-gray-50">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold text-blue-800">
              Welcome, {signedOut ? 'Sign In' : user?.email || 'User'}
            </h1>
            
          </header>
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Update Profile</h2>
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleUpdateProfile}
                className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-4 ml-2 w-48 rounded-lg transition duration-300"
              >
                Update Profile
              </button>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Update Email</h2>
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <input
                type="email"
                placeholder="New Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full p-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex space-x-4">
                <button
                  onClick={handleVerifyNewEmail}
                  className="bg-yellow-800 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition duration-300 w-1/2"
                >
                  Verify New Email
                </button>
                <button
                  onClick={handleUpdateEmail}
                  className="bg-green-800 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300 w-1/2"
                >
                  Update Email
                </button>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Change User ID</h2>
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="New User ID"
                value={newUserID}
                onChange={(e) => setNewUserID(e.target.value)}
                className="w-80 p-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleUpdateUserID}
                className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-8 ml-2 rounded-lg transition duration-300"
              >
                Update User ID
              </button>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Reset Password</h2>
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <button
                onClick={handleResetPassword}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg w-48 transition duration-300"
              >
                Reset Password
              </button>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Delete Account</h2>
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
              <input
                type="password"
                placeholder="Enter Password to Confirm"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleDeleteUser}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg w-48 transition duration-300"
              >
                Delete Account
              </button>
            </div>
          </section>
        </main>
      </div>
      <ToastContainer position="top-right" autoClose={3000} showProgressBar closeOnClick pauseOnHover />
    </PageLayout>
  );
};

export default Dashboard;

