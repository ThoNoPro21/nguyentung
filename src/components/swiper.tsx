// import Swiper core and required 
'use client'
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function SwiperComponent() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // Hàm để cập nhật kích thước màn hình
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={windowSize.width < 640 ? 1 : 2}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='max-w-screen-2xl h-custom-height-slider'
        >
            <SwiperSlide>
                <div className="h-full bg-gray-100 rounded-md px-4 py-2 flex flex-col" >
                    <p className='flex-1'>
                        Bạn có thực sự muốn nâng cấp công việc kinh doanh của mình lên một tầm cao mới bằng cách bổ sung một hệ thống mạnh mẽ và hiệu quả?
                        Nếu câu trả lời là "có", hãy tiếp tục đọc nội dung dưới đây.<br></br>
                        - Nếu bạn đang kinh doanh, bạn sẽ không cần phải lo lắng về việc tìm kiếm khách hàng nữa.<br></br>
                        - Nếu bạn làm hoặc dự định làm tiếp thị liên kết, bạn chỉ cần viết một email, và tiền sẽ về tài khoản chỉ sau vài giờ.<br></br>
                        - Nếu bạn là nhà kinh doanh online, bạn sẽ tự động hóa việc tìm kiếm khách hàng và tăng giá trị trọn đời của khách hàng (LVC) lên nhiều lần.
                    </p>
                    <Image src='/assets/anh1.jpg' alt="avatar" width={1000} height={1000} className="rounded-md w-full h-48 object-cover bg-center " />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-full bg-gray-100 rounded-md px-4 py-2 flex flex-col">
                    <p className='flex-1'>
                        <span>Gửi từ đất nước Hàn Quốc:<span className='font-bold'> NGUYỄN TUYÊN</span></span><br></br>
                        <span>Tới: Những nhà kinh doanh</span><br></br>
                        Xin chào,
                        Hiện tại tôi đang kinh doanh Online! Làm sao tôi biết điều này? Vì hàng ngày, tôi nhận được vô số email và cuộc gọi hỏi về cách tôi đang làm. Đây là cách tôi làm mà nhiều người đã chờ đợi từ lâu.
                        Hỏi tôi về cách bán hàng và sắp tới tôi sẽ chỉ cho những người tìm kiếm những người thực sự quyết tâm và khao khát thành công.
                        Nhiều bạn bè của tôi đã tạo ra những khoản thu nhập đáng kinh ngạc sau khi tôi chia sẻ, tôi nhấn mạnh là "đáng kinh ngạc",
                        nhờ sở hữu hệ thống bí mật này – Internet.
                    </p>
                    <Image src='/assets/anh-down.jpg' alt="avatar" width={1000} height={1000} className="rounded-md w-full h-48 object-cover bg-center " />
                </div>
            </SwiperSlide >
            <SwiperSlide>
                <div className="h-full bg-gray-100 rounded-md px-4 py-2 flex flex-col">
                    <p className='flex-1'>
                        Giờ đây, tôi muốn nói rằng bạn có thể sử dụng công cụ này để phát triển công việc kinh doanh của riêng mình.
                        Bạn có thể trở nên giàu có bằng cách áp dụng công cụ này vào việc kinh doanh những sản phẩm thông thường, nhưng bạn sẽ vượt trội hơn hẳn những người khác.
                        Hãy nắm bắt cơ hội này để biến giấc mơ kinh doanh của bạn thành hiện thực. Tôi tin rằng bạn xứng đáng với thành công và sự phát triển mà hệ thống này mang lại.
                        Chúng ta sẽ cùng nhau vượt qua mọi thử thách và tiến.
                    </p>
                    <Image src='/assets/anh-beach.jpg' alt="avatar" width={1000} height={1000} className="rounded-md w-full h-48 object-cover bg-center" />
                </div>
            </SwiperSlide>
        </Swiper >
    );
};
