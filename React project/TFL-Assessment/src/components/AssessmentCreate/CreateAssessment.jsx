import "./CreateAssessment.css";

const CreateAssessment = () => {
  return (
    <div className="assessment-container">

      <h2 className="assessment-title">Create New Assessment</h2>

      <div className="form-row">
        <label>Select TFL Layer:</label>
        <select>
          <option>Layer 1</option>
          <option>Layer 2</option>
          <option>Layer 3</option>
        </select>
      </div>


      <div className="form-row">
        <label>Select Skills:</label>
        <div className="checkbox-group">
          <label><input type="checkbox" defaultChecked /> Programming Basics</label>
          <label><input type="checkbox" defaultChecked /> OOP Fundamentals</label>
        </div>
      </div>

      <div className="form-row">
        <label>Bloom Levels:</label>
        <div className="pill-group">
          <span className="pill">Remember</span>
          <span className="pill active">Apply</span>
          <span className="pill">Analyze</span>
        </div>
      </div>


      <div className="form-row">
        <label>Difficulty Mix:</label>
        <div className="difficulty">
          Easy 30% | Medium 50% | Hard 20%
        </div>
      </div>


      <div className="form-row">
        <label>Duration:</label>
        <input type="number" value="60" readOnly /> Minutes
      </div>

      <div className="form-row">
        <label>Question Types:</label>
        <div className="checkbox-group">
          <label><input type="checkbox" defaultChecked /> MCQ</label>
          <label><input type="checkbox" defaultChecked /> Coding</label>
          <label><input type="checkbox" defaultChecked /> Scenario</label>
        </div>
      </div>

      <div className="action-buttons">
        <button className="primary">Generate with AI</button>
        <button className="secondary">Save as Draft</button>
      </div>

    </div>
  );
};

export default CreateAssessment;
