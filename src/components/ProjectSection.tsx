// ProjectSection.jsx (ปรับเฉพาะส่วน progress-info)
import React from 'react';
import './ProjectSection.css';

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      image: '../image/school-kids-wearing-face-mask-group-school-kids-with-teacher-sitting-classroom-raising-hands-905x613.jpg',
      school: 'โรงเรียนบ้านน้ำใส',
      province: 'จังหวัดเชียงใหม่',
      description: 'สนับสนุนอุปกรณ์การเรียนสำหรับเด็กในพื้นที่ห่างไกล',
      goal: 50000,
      raised: 35000
    },
    {
      id: 2,
      image: '../image/school-kids-wearing-face-mask-group-school-kids-with-teacher-sitting-classroom-raising-hands-905x613.jpg',
      school: 'โรงเรียนดอยสูง',
      province: 'จังหวัดแม่ฮ่องสอน',
      description: 'ปรับปรุงห้องสมุดโรงเรียน',
      goal: 80000,
      raised: 40000
    },
    {
      id: 3,
      image: '../image/school-kids-wearing-face-mask-group-school-kids-with-teacher-sitting-classroom-raising-hands-905x613.jpg',
      school: 'โรงเรียนปลายฟ้า',
      province: 'จังหวัดน่าน',
      description: 'สร้างสนามเด็กเล่นใหม่',
      goal: 60000,
      raised: 15000
    }
  ];

  return (
    <section className="project-section">
      <h2 className="section-title">โครงการที่น่าสนใจ</h2>
      <div className="project-cards">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="card-image">
              <img 
                src={project.image} 
                alt={project.school}
                width="400"
                height="270"
              />
            </div>
            <div className="card-content">
              <h3>{project.school}</h3>
              <p className="province">{project.province}</p>
              <p className="description">{project.description}</p>
              <div className="progress-info">
                <div className="funding-row">
                  <span>เป้าหมาย: {project.goal.toLocaleString()} บาท</span>
                  <span>ยอดบริจาค: {project.raised.toLocaleString()} บาท</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${(project.raised / project.goal) * 100}%` }}
                  ></div>
                </div>
              </div>
              <button className="donate-button">บริจาค</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;