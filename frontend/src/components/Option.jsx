const Option = () => (
    <div className="option-container">
      <h1>Account Options</h1>
      <div className="options-list">
        <div className="option-item">
          <h3>Account Preferences</h3>
          <p>Manage your account settings and preferences</p>
          <button>Manage</button>
        </div>
        <div className="option-item">
          <h3>Notification Settings</h3>
          <p>Configure how you receive notifications</p>
          <button>Configure</button>
        </div>
        <div className="option-item">
          <h3>Connected Accounts</h3>
          <p>Manage connections to other services</p>
          <button>View</button>
        </div>
        <div className="option-item">
          <h3>Privacy Settings</h3>
          <p>Control your data and privacy options</p>
          <button>Manage</button>
        </div>
      </div>
    </div>
  );
  export default Option;