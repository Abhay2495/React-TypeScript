import './MentorDashbord.css'

const MentorDashbord = () => {
    const StatCard = ({ title, value, alert }) => {
        return (
            <div className={`stat-card ${alert ? "alert" : ""}`}>
                <span className="stat-value">{value}</span>
                <span className="stat-title">{title}</span>
            </div>
        );
    };

    return (
        <div className="dashboard-card">
            <div className="dashboard-header">
                <span className="flower">🌼</span>
                <h2>Transflower Mentors | TFLAssessment Dashboard</h2>
            </div>

            <div className="dashboard-body">
                <div className="info-row">
                    <span><strong>Mentor:</strong> Ravi Tambade</span>
                    <span><strong>Role:</strong> Lead Mentor</span>
                </div>

                <div className="info-row">
                    <span><strong>Active Cohorts:</strong> 3</span>
                    <span><strong>Learners:</strong> 86</span>
                </div>
            </div>

            

            {/* Stats Cards */}
            <div className="stats-grid">
                <StatCard title="Active Tests" value="6" />
                <StatCard title="Pending Review" value="12" />
                <StatCard title="Skill Gaps" value="18" />
                <StatCard title="Alerts" value="3" alert />
            </div>

          

            {/* Skill Health */}
            <div className="skill-health">
                <h3>📊 Skill Health Snapshot</h3>
                <ul>
                    <li className="strong">Strong: Programming Basics</li>
                    <li className="average">Average: Web Architecture</li>
                    <li className="weak">Weak: Dependency Injection, LINQ</li>
                </ul>
            </div>
        </div>
    )
};

export default MentorDashbord;