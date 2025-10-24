export const projectsData = {
    title: "Dự án của tôi",
    icon: "fas fa-code-branch",
    projects: [
        {
            title: 'Vue-AnatonLandingPage',
            description: 'Trang landing page giới thiệu sản phẩm với giao diện hiện đại, hiệu ứng chuyển động mượt mà và tương thích trên mọi thiết bị.',
            image: 'https://binhan.vercel.app/bt.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
            demo: 'https://binhantt.github.io/Vue-AnatonLandingPage/',
            github: 'https://github.com/binhantt/Vue-AnatonLandingPage'
        },
       
        {
            title: 'Backend API Service',
            description: 'RESTful API service xây dựng với Express.js và TypeScript, cung cấp xác thực người dùng và quản lý danh mục. Tích hợp JWT, mã hóa mật khẩu và xác thực captcha.',
            image: 'https://binhan.vercel.app/sever.png',
            technologies: [
                'Node.js',
                'TypeScript',
                'Express.js',
                'MySQL',
                'JWT',
                'Bcrypt'
            ],
           // demo: 'https://api.binhan.dev/docs',
            github: 'https://github.com/binhantt/bankend'
        },
        {
            title: 'CV Portfolio Website',
            description: 'Website CV cá nhân hiện đại được xây dựng với Vue 3 và Bootstrap Vue, tích hợp nhiều tính năng như timeline kinh nghiệm, form liên hệ, chế độ theme động, và hiệu ứng chuyển động mượt mà. Thiết kế responsive và tối ưu trải nghiệm người dùng.',
            image: 'https://binhan.vercel.app/cv-portfolio.png',
            technologies: [
                'Vue 3',
                'Bootstrap Vue',
                'AOS Animation',
                'Font Awesome',
                'CSS Variables'
            ],
            demo: 'https://binhan.vercel.app/',
            github: 'https://github.com/binhantt/du_an_trang-can'
        }, 
        {
            title: 'Quản lý hệ thống (React + Node.js)',
            description: 'Ứng dụng fullstack quản lý người dùng, sử dụng React 18 (Vite) cho frontend và Node.js + Express cho backend. Tích hợp đăng nhập, xác thực JWT, form validation, responsive UI và RESTful API kết nối MySQL.',
            image: 'https://binhan.vercel.app/sever2.png', // bạn có thể thêm hình minh họa dự án
            technologies: [
              'React 18',
              'Vite',
              'React Bootstrap',
              'React Router',
            ],
            demo: 'https://sever-react-rgp0cuaj9-binhantts-projects.vercel.app/', 
            github: 'https://github.com/binhantt/sever_react' 
          },
          
        {
            title: 'Nuxt Minimal Starter Website',
            description: 'Trang người dùng xây dựng bằng Nuxt 3 với cấu trúc tối giản, giao diện modular. Hiển thị sản phẩm hot, quản lý thông tin cá nhân, và tích hợp layout chính. Hỗ trợ auto import component, tối ưu SEO và chuẩn bị sẵn cho triển khai production.',
            image: 'https://binhan.vercel.app/bai2.png', 
            technologies: [
              'Nuxt 3',
              'Vue 3',
              'Vite',
              'Pinia',
              'Bulma'
            ],
            github: 'https://github.com/binhantt/nuxt-user-page'
          }          
    ]
}