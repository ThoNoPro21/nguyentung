"use client"
import FormContact from "@/components/FormContact";
import { IconPhone } from "@/components/IconComponent";
import FooterComponent from "@/components/nav/FooterComponent";
import HeaderComponent from "@/components/nav/HeaderComponent";
import { SwiperComponent } from "@/components/swiper";
import { FloatButton } from "antd";
import { Footer } from "antd/es/layout/layout";
import Image from "next/image"
import Link from "next/link";

export default function Home() {
        // URL schema để mở ứng dụng Zalo và bắt đầu cuộc trò chuyện
        const zaloUrl = 'https://zalo.me/821043856688'; // Thay [SỐ_ĐIỆN_THOẠI] bằng số điện thoại của bạn hoặc mã Zalo OA
    return (
        <main className="px-2 lg:px-10 h-auto overflow-hidden">
            <HeaderComponent />
            <div className="relative bg-[url('/assets/bg.jpg')] bg-cover bg-center w-full h-screen flex items-center justify-center">
                <div className="flex flex-col text-center">
                    <p className="text-3xl font-bold max-w-96 ">
                        Biến Đổi Cuộc Đời Nhờ Internet: Câu Chuyện Của{' '}
                        <span className="font-mono text-5xl text-yellow-700">
                            Nguyễn Tuyên
                        </span>
                    </p>

                    <span className="text-lg font-normal font-mono">
                        Chàng trai từ công nhân trở thành kỹ sư xây dựng và kinh
                        doanh trên Internet.
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full px-2">
                <div className="flex flex-col md:flex-row pt-5 gap-4">
                    <Image
                        src="/assets/anh1.jpg"
                        alt="avatar"
                        width={1000}
                        height={1000}
                        priority
                        className="w-96 h-auto rounded-md"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">
                            Giai đoạn đầy bão tố
                        </h1>
                        <p className="max-w-96">
                            Trước khi trở thành kỹ sư xây dựng và kinh doanh
                            trên Internet tại Hàn Quốc, Tuyên nói rằng mình đã
                            trải qua giai đoạn đầy bão tố, khiến anh trở nên im
                            lặng và mất phương hướng.Giai đoạn đầy bão tố Sinh
                            ra trong một gia đình nghèo ở vùng quê, những gì hằn
                            sâu trong tuổi thơ của Nguyên Văn Tuyên (1991) đều
                            lạc hậu và vất vả. Từ nhỏ, gia đình kinh tế khó
                            khăn, cha mẹ cũng áp lực bủa vây vì tiền ăn học của
                            mấy chị em. khi ấy, Tuyên không nhận thức được vấn
                            đề.Đến cuối cấp 3, Tuyên nhận ra vấn đề là phải đi
                            làm kiếm nhiều tiền cho cha mẹ. Năm 2009, Tuyên bắt
                            đầu đi xuất khẩu lao động ở Đài Loan. Tới năm 2012,
                            Tuyên đã đặt chân đến và làm việc tại Hàn Quốc.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row pt-5 gap-4 ">
                    <div className="flex flex-col ">
                        <h1 className="text-2xl font-bold">
                            Giai Đoạn Tìm Kiếm Cơ Hội Tại Hàn Quốc
                        </h1>
                        <p className="max-w-96">
                            Lý do khiến tôi rời quê hương để đến Hàn Quốc tìm
                            kiếm cơ hội không chỉ đơn thuần là khát vọng về một
                            cuộc sống tốt đẹp hơn, mà còn là mong muốn học hỏi
                            và phát triển trong một môi trường mới. Hàn Quốc,
                            với nền công nghiệp xây dựng phát triển và nhiều dự
                            án lớn, đã hứa hẹn mang lại cho tôi những kinh
                            nghiệm quý báu và cơ hội thăng tiến trong sự
                            nghiệp.Nhưng điều làm tôi luôn cảm thấy day dứt nhất
                            chính là gia đình nhỏ bé ở quê hương Việt Nam. Mỗi
                            lần gọi điện về nhà, nghe giọng nói của vợ và con,
                            tôi lại cảm thấy lòng mình như chùng xuống. Những
                            khoảnh khắc quan trọng trong cuộc sống của con, tôi
                            đã bỏ lỡ; những buổi chiều tối gia đình quây quần
                            bên nhau, tôi không thể có mặt. Mẹ cha già yếu vẫn
                            ngày ngày ngóng trông tin con, mong đợi ngày tôi trở
                            về. Những lá thư từ quê nhà, những lời động viên và
                            sự chờ đợi của gia đình.
                        </p>
                    </div>
                    <Image
                        src="/assets/anh2.jpg"
                        alt="avatar"
                        width={1000}
                        height={1000}
                        className="w-96 h-auto rounded-sm"
                    />
                </div>
                <div className="flex flex-col pt-5 gap-4 max-w-screen-2xl">
                    <h1 className="text-2xl font-bold text-center">
                        Hành Trình Đến Với Internet
                    </h1>
                    <p className="w-full">
                        Với hơn 12 năm kinh nghiệm trong lĩnh vực kỹ sư xây dựng
                        tại Hàn Quốc, cùng với 6 năm kinh nghiệm kinh doanh và
                        bán hàng, và hơn 3 năm huấn luyện đội ngũ quảng cáo bán
                        hàng online và chốt sales, tôi nhận thấy rằng nhiều
                        doanh nghiệp gặp khó khăn lớn nhất trong việc tiếp cận
                        khách hàng. Nhiều chủ doanh nghiệp đã đầu tư vào nhà máy
                        sản xuất, sở hữu sản phẩm chất lượng cao và thương hiệu
                        uy tín, nhưng lại thiếu kỹ năng marketing để tiếp cận
                        thị trường. Họ thực hiện tốt các bước như cải tiến chất
                        lượng, thiết kế bao bì, nhưng gặp khó khăn trong việc
                        tiếp thị và bán hàng. Chính vì lý do đó, tôi quyết định
                        tổ chia sẻ trực tiếp trên nền tảng Facebook, Tiktok,
                        Youtube có tên{' '}
                        <span className="text-lg text-cyan-600">
                            Nguyễn Tuyên
                        </span>
                        . Trong những buổi livestream, tôi còn giúp các chủ
                        doanh nghiệp kết nối các mặt hàng tại việt nam xuất khẩu
                        sang thị trường Hàn Quốc, và ngược lại tại các doanh
                        nghiệp ở Hàn Quốc như mỹ phẩm sâm Hàn giá gốc. Tuyên săn
                        sàng kết nối giúp nhau phát triển . Đây là một khóa học
                        hiếm hoi và có giá trị đặc biệt, không chỉ dạy các công
                        thức, nguyên tắc hay lý thuyết chung chung, mà tập trung
                        vào những vấn đề cốt lõi và quan trọng nhất trong lĩnh
                        vực marketing và bán hàng.
                    </p>
                </div>
            </div>
            <div className="mt-20">
                <SwiperComponent />
            </div>
            <div className="bg-gradient-to-r from-violet-200 to-pink-200 flex flex-col justify-center items-center py-5 mt-20">
                <h1 className="py-5 text-2xl font-bold text-center">Liên Hệ</h1>
                <div className="flex flex-col sm:flex-row w-auto gap-2 p-4  bg-white rounded-md">
                    <div className="h-full w-full md:w-1/2">
                        <p className="font-semibold text-xs sm:text-sm">
                            Số điện thoại :{' '}
                            <span className="font-bold">+82 01043856688</span>
                        </p>
                        <p className="font-semibold text-xs sm:text-sm">
                            Gmail :{' '}
                            <span className="font-bold">
                                nguyentuyen6789kr@gmail.com
                            </span>
                        </p>
                        <div className="flex justify-center items-center pt-4">
                            <FormContact />
                        </div>
                    </div>
                    <Image
                        src="/assets/anh1.jpg"
                        alt="avatar"
                        width={1000}
                        height={1000}
                        priority
                        className="h-auto rounded-md w-1/2 hidden md:block"
                    />
                </div>
            </div>
            <div className="pt-20">
                <FooterComponent />
            </div>

            <div className="contact-zalo">
                <Link href={zaloUrl} target="_blank" rel="noopener noreferrer">
                    <FloatButton
                        type="primary"
                        icon={<IconPhone />}
                        description="Zalo"
                        shape="square"
                        className="text-base font-bold animate-pulseGlowBlue"
                    />
                </Link>
            </div>
        </main>
    );
}
