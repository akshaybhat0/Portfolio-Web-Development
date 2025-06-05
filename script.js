// Project data
const projects = [
    {
        title: 'Rescue Link',
        description: 'A project that demonstrates emergency situations where users can input the raw location and incident details. The system then dispatches a rescue team to the specified location.',
        technologies: ['Go', 'Cloud', 'DevOps'],
        image: 'assets/images/rescue.png',
        
    },
    {
        title: 'Peripheral Nerve Imaging using Deep Learning',
        description: 'Detection of the brachial plexus nerve in the human body using deep learning, ensuring precise and accurate location identification.',
        technologies: ['Python', 'Deep Learning', 'Computer Vision', 'CNN'],
        image: 'assets/images/nerve.png',
       
    },
    {
        title: 'Hostel Management System',
        description: 'Exciting project based on web development for managing hostel student data efficiently and accurately.',
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PostgreSQL'],
        image: 'assets/images/hostel.jpeg',
        
    },
    {
        title:'Chat-Bot',
        description: 'A chatbot that can answer every question you ask. It is built using Python and utilizes the OpenAI API for natural language processing.',
        technologies: ['Python', 'OpenAI API', 'Natural Language Processing'],
        image: 'assets/images/chatbot.png',
    },
    {
        title:'Car Purchasing System',
        description: 'A system that assists users in purchasing cars by providing information on various models, prices, and financing options.',
        technologies: ['Go', 'Web Development', 'Database Management(PostgreSQL)'],
        image: 'assets/images/cars.png',
    },
    {
        title:'IoT Based Smart Water Efficiency System',
        description: 'An IoT-based system designed to monitor and manage water usage efficiently, ensuring optimal water conservation.',
        technologies: ['Go', 'Web Development', 'Database Management(PostgreSQL)'],
        image: 'assets/images/Iot.png',
    },
];

// Load projects into the DOM
function loadProjects() {
    const container = document.getElementById('projects-container');
    if (container) {
        container.innerHTML = '';
        projects.forEach(project => {
            const projectHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card project-card h-100">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <div class="tech-tags mb-2">
                                ${project.technologies.map(tech => `<span class="badge bg-primary me-1">${tech}</span>`).join('')}
                            </div>
                            ${project.link ? `<a href="${project.link}" class="btn btn-primary mt-2">View Project</a>` : ''}
                        </div>
                    </div>
                </div>`;
            container.insertAdjacentHTML('beforeend', projectHTML);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});