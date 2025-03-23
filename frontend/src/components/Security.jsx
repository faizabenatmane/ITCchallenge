const Security = () => (
  <div className="security-container">
    <h1>Security Settings</h1>
    <div className="security-options">
      <div className="security-option">
        <h3>Two-Factor Authentication</h3>
        <p>Add an extra layer of security to your account</p>
        <button>Enable</button>
      </div>
      <div className="security-option">
        <h3>Password Settings</h3>
        <p>Change your password regularly for better security</p>
        <button>Change Password</button>
      </div>
      <div className="security-option">
        <h3>Login Notifications</h3>
        <p>Get notified when someone logs into your account</p>
        <button>Configure</button>
      </div>
    </div>
  </div>
);
export default Security;