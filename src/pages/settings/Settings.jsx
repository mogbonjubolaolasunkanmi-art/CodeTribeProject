import { useState } from "react";
// import Sidebar from "../../components/Sidebar";
import {
  User,
  Settings as SettingsIcon,
  Bell,
  Lock,
  Menu,
  X,
  Camera,
  ChevronDown,
  Check,
  Shield,
  Target,
} from "lucide-react";

import "./Settings.css";

function Settings() {
  // =========================
  // SIDEBAR STATE
  // =========================
  // <Sidebar />;
  const [activeTab, setActiveTab] = useState("Account");
  const [menuOpen, setMenuOpen] = useState(false);

  // =========================
  // ACCOUNT STATE
  // =========================

  const [fullName, setFullName] = useState("Email");
  const [email, setEmail] = useState("User@gmail.com");
  const [password, setPassword] = useState("johnson123");
  const [newPassword, setNewPassword] = useState("");

  const [showPasswordInput, setShowPasswordInput] = useState(false);

  // =========================
  // PREFERENCE STATE
  // =========================

  const [theme, setTheme] = useState("Light");

  const [compactMode, setCompactMode] = useState(false);

  const [animations, setAnimations] = useState(true);

  const [timeZone, setTimeZone] = useState("(GMT+1:00) West Central Africa");

  const [weekStarts, setWeekStarts] = useState("Monday");

  // =========================
  // HABIT DEFAULTS STATE
  // =========================

  const [frequency, setFrequency] = useState("Daily");

  const [reminderTime, setReminderTime] = useState("8:00 AM");

  const [rescheduleMissed, setRescheduleMissed] = useState(true);

  // =========================
  // DASHBOARD STATE
  // =========================

  const [showStreaks, setShowStreaks] = useState(true);

  const [showStatistics, setShowStatistics] = useState(true);

  const [showQuotes, setShowQuotes] = useState(false);

  // =========================
  // NOTIFICATION STATE
  // =========================

  const [emailNotifications, setEmailNotifications] = useState(true);

  const [pushNotifications, setPushNotifications] = useState(true);

  // =========================
  // SIDEBAR ITEMS
  // =========================

  const menuItems = [
    {
      name: "Account",
      icon: <User size={18} />,
    },

    {
      name: "Preferences",
      icon: <SettingsIcon size={18} />,
    },

    {
      name: "Habit Defaults",
      icon: <Target size={18} />,
    },

    {
      name: "Notifications",
      icon: <Bell size={18} />,
    },

    {
      name: "Data & Privacy",
      icon: <Lock size={18} />,
    },
  ];

  // =========================
  // HANDLE SIDEBAR CLICK
  // =========================

  const handleMenuClick = (item) => {
    setActiveTab(item);

    // Close sidebar on mobile
    setMenuOpen(false);

    // Scroll back to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // SAVE BUTTON
  // =========================

  const handleSave = () => {
    alert(`${activeTab} settings saved successfully!`);
  };

  // =========================
  // PASSWORD
  // =========================

  //   const handlePasswordChange = () => {
  //     alert("Password change option clicked.");
  //   };
  const handlePasswordChange = () => {
    if (!newPassword.trim()) {
      alert("Please enter a new password.");
      return;
    }

    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    setPassword(newPassword);

    setNewPassword("");

    setShowPasswordInput(false);

    alert("Password changed successfully!");
  };
  // =========================
  // TOGGLE COMPONENT
  // =========================

  const Toggle = ({ value, onChange }) => {
    return (
      <button className={`toggle ${value ? "on" : ""}`} onClick={onChange}>
        <span></span>
      </button>
    );
  };

  // =========================
  // ACCOUNT PAGE
  // =========================

  const AccountSection = () => {
    return (
      <div className="settings-card">
        <h2>Account</h2>

        <div className="account-profile">
          <div className="large-avatar">
            User
            <button className="camera-btn">
              <Camera size={14} />
            </button>
          </div>

          <div className="account-info">
            <h3>Username</h3>

            <p>User@gmail.com</p>

            <button className="change-photo">Change photo</button>
          </div>
        </div>

        {/* Full Name */}

        <div className="form-group">
          <label>Full Name</label>

          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Email */}

        <div className="form-group">
          <label>Email Address</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}

        <div className="password-row">
          <div>
            <label>Password</label>

            <p className="password-dots">••••••••••••</p>
          </div>

          <button className="change-password" onClick={handlePasswordChange}>
            Change password
          </button>
        </div>

        <button className="save-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    );
  };

  // =========================
  // PREFERENCES PAGE
  // =========================

  const PreferencesSection = () => {
    return (
      <>
        {/* APPEARANCE */}

        <div className="settings-card">
          <h2>Appearance</h2>

          <div className="preference-group">
            <label>Theme</label>

            <div className="theme-options">
              <button
                className={theme === "Light" ? "selected" : ""}
                onClick={() => setTheme("Light")}
              >
                ☀️ Light
              </button>

              <button
                className={theme === "Dark" ? "selected" : ""}
                onClick={() => setTheme("Dark")}
              >
                🌙 Dark
              </button>

              <button
                className={theme === "System" ? "selected" : ""}
                onClick={() => setTheme("System")}
              >
                ⚙️ System
              </button>
            </div>
          </div>

          {/* Compact mode */}

          <div className="preference-row">
            <div>
              <h3>Compact mode</h3>

              <p>Reduce spacing throughout the app.</p>
            </div>

            <Toggle
              value={compactMode}
              onChange={() => setCompactMode(!compactMode)}
            />
          </div>

          {/* Animations */}

          <div className="preference-row">
            <div>
              <h3>Show animations</h3>

              <p>Enable smooth animations and transitions.</p>
            </div>

            <Toggle
              value={animations}
              onChange={() => setAnimations(!animations)}
            />
          </div>
        </div>

        {/* HABIT DEFAULTS */}

        <div className="settings-card">
          <h2>Habit Defaults</h2>

          <div className="form-group">
            <label>Default habit frequency</label>

            <div className="select-wrapper">
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              >
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>

              <ChevronDown size={18} />
            </div>
          </div>

          {/* Reminder */}

          <div className="form-group">
            <label>Default reminder time</label>

            <div className="select-wrapper">
              <select
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
              >
                <option>7:00 AM</option>
                <option>8:00 AM</option>
                <option>9:00 AM</option>
                <option>12:00 PM</option>
                <option>6:00 PM</option>
                <option>8:00 PM</option>
              </select>

              <ChevronDown size={18} />
            </div>
          </div>

          {/* Week */}

          <div className="form-group">
            <label>Week starts on</label>

            <div className="select-wrapper">
              <select
                value={weekStarts}
                onChange={(e) => setWeekStarts(e.target.value)}
              >
                <option>Monday</option>
                <option>Sunday</option>
              </select>

              <ChevronDown size={18} />
            </div>
          </div>

          {/* Missed habit */}

          <div className="preference-row">
            <div>
              <h3>Reschedule missed habits</h3>

              <p>Allow missed habits to be moved to another day.</p>
            </div>

            <Toggle
              value={rescheduleMissed}
              onChange={() => setRescheduleMissed(!rescheduleMissed)}
            />
          </div>
        </div>

        {/* DASHBOARD */}

        <div className="settings-card">
          <h2>Dashboard</h2>

          <div className="preference-row">
            <div>
              <h3>Show streaks</h3>

              <p>Display your current habit streaks.</p>
            </div>

            <Toggle
              value={showStreaks}
              onChange={() => setShowStreaks(!showStreaks)}
            />
          </div>

          <div className="preference-row">
            <div>
              <h3>Show progress statistics</h3>

              <p>Display your habit progress and statistics.</p>
            </div>

            <Toggle
              value={showStatistics}
              onChange={() => setShowStatistics(!showStatistics)}
            />
          </div>

          <div className="preference-row">
            <div>
              <h3>Show motivational quotes</h3>

              <p>Display motivational messages on your dashboard.</p>
            </div>

            <Toggle
              value={showQuotes}
              onChange={() => setShowQuotes(!showQuotes)}
            />
          </div>
        </div>

        {/* TIME SETTINGS */}

        <div className="settings-card">
          <h2>Time & Date</h2>

          <div className="form-group">
            <label>Time Zone</label>

            <div className="select-wrapper">
              <select
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
              >
                <option>(GMT+1:00) West Central Africa</option>

                <option>(GMT+0:00) Greenwich Mean Time</option>

                <option>(GMT-5:00) Eastern Time</option>
              </select>

              <ChevronDown size={18} />
            </div>
          </div>

          <div className="form-group">
            <label>Week Starts On</label>

            <div className="select-wrapper">
              <select
                value={weekStarts}
                onChange={(e) => setWeekStarts(e.target.value)}
              >
                <option>Monday</option>
                <option>Sunday</option>
              </select>

              <ChevronDown size={18} />
            </div>
          </div>

          <button className="save-button" onClick={handleSave}>
            Save Preferences
          </button>
        </div>
      </>
    );
  };

  // =========================
  // HABIT DEFAULTS PAGE
  // =========================

  const HabitDefaultsSection = () => {
    return (
      <div className="settings-card">
        <h2>Habit Defaults</h2>

        <p className="section-description">
          Choose the default settings that will be applied whenever you create a
          new habit.
        </p>

        <div className="form-group">
          <label>Default frequency</label>

          <div className="select-wrapper">
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>

            <ChevronDown size={18} />
          </div>
        </div>

        <div className="form-group">
          <label>Default reminder</label>

          <div className="select-wrapper">
            <select
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
            >
              <option>7:00 AM</option>
              <option>8:00 AM</option>
              <option>9:00 AM</option>
              <option>6:00 PM</option>
              <option>8:00 PM</option>
            </select>

            <ChevronDown size={18} />
          </div>
        </div>

        <div className="preference-row">
          <div>
            <h3>Reschedule missed habits</h3>

            <p>Automatically move missed habits to the next available day.</p>
          </div>

          <Toggle
            value={rescheduleMissed}
            onChange={() => setRescheduleMissed(!rescheduleMissed)}
          />
        </div>

        <button className="save-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    );
  };

  // =========================
  // NOTIFICATIONS PAGE
  // =========================

  const NotificationsSection = () => {
    return (
      <div className="settings-card">
        <h2>Notifications</h2>

        <p className="section-description">
          Choose how Habitly keeps you updated.
        </p>

        <div className="notification-row">
          <div>
            <h3>Email notifications</h3>

            <p>Receive reminders and updates by email.</p>
          </div>

          <Toggle
            value={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
        </div>

        <div className="notification-row">
          <div>
            <h3>Push notifications</h3>

            <p>Receive notifications directly on your device.</p>
          </div>

          <Toggle
            value={pushNotifications}
            onChange={() => setPushNotifications(!pushNotifications)}
          />
        </div>

        <div className="notification-row">
          <div>
            <h3>Habit reminders</h3>

            <p>Get reminded when it is time to complete a habit.</p>
          </div>

          <Toggle value={true} onChange={() => {}} />
        </div>
      </div>
    );
  };

  // =========================
  // DATA & PRIVACY
  // =========================

  const DataPrivacySection = () => {
    return (
      <div className="settings-card">
        <h2>Data & Privacy</h2>

        <p className="section-description">
          Manage your Habitly data and privacy settings.
        </p>

        <div className="privacy-item">
          <div>
            <h3>Download your data</h3>

            <p>Get a copy of your habits and account information.</p>
          </div>

          <button className="secondary-button">Download</button>
        </div>

        <div className="privacy-item">
          <div>
            <h3>Delete account</h3>

            <p>Permanently delete your Habitly account and data.</p>
          </div>

          <button className="danger-button">Delete</button>
        </div>
      </div>
    );
  };

  // =========================
  // DISPLAY CORRECT SECTION
  // =========================

  const renderContent = () => {
    switch (activeTab) {
      case "Account":
        return <AccountSection />;

      case "Preferences":
        return <PreferencesSection />;

      case "Habit Defaults":
        return <HabitDefaultsSection />;

      case "Notifications":
        return <NotificationsSection />;

      case "Data & Privacy":
        return <DataPrivacySection />;

      default:
        return <AccountSection />;
    }
  };

  return (
    <div className={`settings-page ${theme === "Dark" ? "dark-mode" : ""}`}>
      {/* =========================
          HEADER
      ========================= */}

      {/* <header className="settings-header">
        <div className="header-left">
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div>
            <h1>Settings</h1>

            <p>Manage your account and preferences.</p>
          </div>
        </div>

        <div className="header-profile">
          <Bell size={20} />

          <div className="profile-small">
            <div className="profile-avatar-small">AJ</div>

            <span>Alex Johnson</span>

            <ChevronDown size={15} />
          </div>
        </div>
      </header> */}

      {/* =========================
          MAIN
      ========================= */}

      <main className="settings-container">
        {/* SIDEBAR */}

        <aside className={`settings-sidebar ${menuOpen ? "open" : ""}`}>
          <div className="mobile-sidebar-title">
            <span>Settings</span>

            <button onClick={() => setMenuOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`sidebar-item ${
                activeTab === item.name ? "active" : ""
              }`}
              onClick={() => handleMenuClick(item.name)}
            >
              {item.icon}

              <span>{item.name}</span>
            </button>
          ))}
        </aside>

        {/* MOBILE OVERLAY */}

        {menuOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* CONTENT */}

        <section className="settings-content">
          <div className="content-heading">
            <h2>{activeTab}</h2>

            <p>
              {activeTab === "Account" &&
                "Manage your personal account information."}

              {activeTab === "Preferences" &&
                "Customize how Habitly works for you."}

              {activeTab === "Habit Defaults" &&
                "Choose your default habit settings."}

              {activeTab === "Notifications" &&
                "Manage how Habitly communicates with you."}

              {activeTab === "Data & Privacy" &&
                "Manage your data and privacy."}
            </p>
          </div>

          {renderContent()}
        </section>
      </main>
    </div>
  );
}

export default Settings;
