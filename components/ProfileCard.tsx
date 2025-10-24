import React from 'react';

export const ProfileCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
      <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
        <img 
          className="w-48 h-48 rounded-full mx-auto md:mx-0 shadow-md object-cover" 
          src="https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223" 
          alt="Binh An"
        />
        <h1 className="text-4xl font-bold mt-4 text-gray-900">Binh An</h1>
        <p className="text-xl text-gray-600">Full-Stack Developer</p>
      </div>
      <div className="md:w-2/3 md:pl-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Giới thiệu</h2>
        <p className="text-gray-700 leading-relaxed">
          Xin chào! Tôi là Bình An, một lập trình viên Full-Stack đam mê xây dựng các ứng dụng web hiệu quả và có khả năng mở rộng. Với kinh nghiệm làm việc trên cả frontend và backend, tôi có khả năng biến những ý tưởng phức tạp thành các sản phẩm kỹ thuật số thân thiện với người dùng.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tôi luôn mong muốn học hỏi các công nghệ mới và áp dụng chúng để giải quyết các vấn đề thực tế. Mục tiêu của tôi là tạo ra các giải pháp phần mềm không chỉ đáp ứng yêu cầu kỹ thuật mà còn mang lại trải nghiệm tuyệt vời cho người dùng.
        </p>
      </div>
    </div>
  );
};
