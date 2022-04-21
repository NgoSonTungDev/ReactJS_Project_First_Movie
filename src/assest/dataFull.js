const dataFull = [
  {
    id: 1,
    backgrou:
      "https://bloganchoi.com/wp-content/uploads/2021/03/tay-du-ky-ma-vuong-tai-sinh-bloganchoi-4.jpeg",
    name: "Tây Du Ký Tái Thế Yêu Vương",
    anh: "https://phim.didibkk.com/wp-content/uploads/2021/07/tq3288CLfOrwVfIFvMrTgdeNhga.jpg",
    daodien: " N/A,",
    quocgia: "Phim Trung Quốc",
    theloai: " Phim Chiếu Rạp",
    phathanh: 2021,
    thoiluong: "94 phút",
    traler:"https://www.youtube.com/embed/9OBRc8KRz2s",
    videoful:"https://www.youtube.com/embed/kdKva_ybpcs"
  },
  {
    id: 2,
    backgrou: "https://i.ibb.co/n7bCMV1/see-season-1-gallery-8xwx-1080.jpg",
    name: "Thấy (Phần 2)",
    anh: "https://img.phimchill.tv/images/film/thay-phan-2.jpg",
    daodien: "Francis Lawrence",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Viễn Tưởng",
    phathanh: 2021,
    thoiluong: "159p",
    traler:"https://www.youtube.com/embed/-fN_zp1Tln8",
    videoful:"https://www.youtube.com/embed/6XuHt0GCzaY"
  },
  {
    id: 3,
    backgrou: "https://www.themoviedb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
    name: "Godzilla Đại Chiến Kong",
    anh: "https://img.phimchill.tv/images/film/godzilla-dai-chien-kong.jpg",
    daodien: " Adam Wingard",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Viễn Tưởng ",
    phathanh: 2021,
    thoiluong: "161p",
    traler:"https://www.youtube.com/embed/yFpuUGFS1Kg",
    videoful:"https://www.youtube.com/embed/uOrpf6bYK2Q"
  },
  {
    id: 4,
    backgrou: "https://i.ytimg.com/vi/CLskGCVbuXE/maxresdefault.jpg",
    name: "The Ash Lad: Cuộc Chiến Sơn Thần",
    anh: "https://img.phimchill.tv/images/film/the-ash-lad-cuoc-chien-son-than.jpg",
    daodien: " Mikkel Brænne Sandemose",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Viễn Tưởng  ",
    phathanh: 2017,
    thoiluong: "159p",
    traler:"https://www.youtube.com/embed/CLskGCVbuXE",
    videoful:"https://www.youtube.com/embed/CLskGCVbuXE"
  },
  {
    id: 5,
    backgrou: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPz6lfWHFLYYJOrtkEBa-yNXSZJfDbsdLtTXsBWn_qr_vWzZEDVS2R0ITMIFklr7fQR7U&usqp=CAU",
    name: "Ma Tốc Độ 2: Linh Hồn Báo Thù",
    anh: "https://img.phimchill.tv/images/film/ma-toc-do-2-linh-hon-bao-thu.jpg",
    daodien: "Mark Neveldine, Brian Taylor",
    quocgia: "Phim Âu Mỹ",
    theloai: "Phim Hành Động",
    phathanh: 2012,
    thoiluong: "180p",
    traler:"https://www.youtube.com/embed/Nuemk7Y7cjM",
    videoful:"https://www.youtube.com/embed/nfzXxHVIFLE"
  },
  {
    id: 6,
    backgrou: "https://www.studyphim.vn/system/movies/36/thumbnails/original/dR3uWyThPflUEdfzgw1B39yNDEa.jpg",
    name: "GI Joe 2 : Báo thù",
    anh: "https://img.phimchill.tv/images/film/gi-joe-2-bao-thu.jpg",
    daodien: "Jon M. Chu",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Viễn Tưởng ",
    phathanh: 2013,
    thoiluong: "110 phút",
    traler:"https://www.youtube.com/embed/WDVxzmi8uTg",
    videoful:"https://www.youtube.com/embed/fzyT8NLhej0"
  },
  {
    id: 7,
    backgrou: "https://2.bp.blogspot.com/-QYeGOhjcB0s/XIKVH-jSxyI/AAAAAAABONA/Ynp2QNs70Xgoj6uK_sDe_vwaCORE_IZcgCLcBGAs/s1600/Bi%25E1%25BB%2587t%2B%25C4%2590%25E1%25BB%2599i%2BSi%25C3%25AAu%2BAnh%2BH%25C3%25B9ng%2B4%2BT%25C3%25A0n%2BCu%25E1%25BB%2599c%2B-%2BAvengers%2B4%2BEndgame%2B%25282019%2529.jpg",
    name: "Biệt Đội Siêu Anh Hùng 4: Tàn Cuộc",
    anh: "https://img.phimchill.tv/images/film/biet-doi-sieu-anh-hung-4-tan-cuoc.jpg",
    daodien: "Anthony Russo",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Hành Động",
    phathanh: 2019,
    thoiluong: "120p",
    traler:"https://www.youtube.com/embed/B-6_OboZV8c",
    videoful:"https://www.youtube.com/embed/OOKRET5AmBQ"
  },
  {
    id: 8,
    backgrou: "https://photo2.tinhte.vn/data/attachment-files/2021/08/5613491_image.jpg",
    name: "Biệt đội GI Joe: Cuộc chiến Mãng xà",
    anh: "https://img.phimchill.tv/images/film/biet-doi-gi-joe-cuoc-chien-mang-xa.jpg",
    daodien: "Stephen Sommers",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Hành Động",
    phathanh: 2009,
    thoiluong: "118p",
    traler:"https://www.youtube.com/embed/Ta_JG78rFuQ",
    videoful:"https://www.youtube.com/embed/0U7XCifbu6U"
  },
  {id: 9,
    backgrou: 'https://media.molistar.com/zoom/2021/08/23/Xuantien/61237e5e642a3_1200_630.jpg',
    name: "Venom 2 : Đối mặt tử thù",
    anh: "https://img.phimchill.tv/images/film/venom-2-doi-mat-tu-thu.jpg",
    daodien: "Andy Serkis,",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Viễn Tưởng",
    phathanh: 2021,
    thoiluong: "129p",
    traler:"https://www.youtube.com/embed/EVWdzVtSh1I",
    videoful:"https://www.youtube.com/embed/fhESwHAnQF8"
  },
  {
    id: 10,
    backgrou: "https://ca-times.brightspotcdn.com/dims4/default/2d2dfbe/2147483647/strip/true/crop/1600x900+0+0/resize/1486x836!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5a%2Ff0%2F9ff01b52b8a4d100c726c38c709f%2Fla-kcrust-1483993341-snap-photo",
    name: "One Piece Film Gold",
    anh: "https://img.phimchill.tv/images/film/onepiecefilmgoldroadshowpromo-201701578.jpg",
    daodien: "Hiroaki Miyamoto",
    quocgia: "Phim Nhật Bản",
    theloai: "Phim Chiếu Rạp  ",
    phathanh: 2016,
    thoiluong: "159p",
    traler:"https://www.youtube.com/embed/65yN6zXnpYs",
    videoful:"https://www.youtube.com/embed/cSdp9xqWYDk"
  },
  {
    id: 11,
    backgrou: "https://sphimle.com/wp-content/uploads/2021/06/Xa-Nhan-Bao-Thu-Snake-Eyes-2021-1.jpg",
    name: "G. I. Joe 3: Xà nhãn báo thù",
    anh: "https://img.phimchill.tv/images/film/g-i-joe-xa-nhan-bao-thu.jpg",
    daodien: "Robert Schwentke,",
    quocgia: "Phim Âu Mỹ",
    theloai: "Phim Hành Động",
    phathanh: 2021,
    thoiluong: "120p",
    traler:"https://www.youtube.com/embed/qX5urfsinlc",
    videoful:"https://www.youtube.com/embed/wbOUmSapbzQ"
  },

  {
    id: 12,
    backgrou: "https://i.ytimg.com/vi/RZM6o9EktVY/maxresdefault.jpg",
    name: "Biển Động Cá Sấu Điên",
    anh: "https://img.phimchill.tv/images/film/bien-dong-ca-sau-dien.jpg",
    daodien: "Chu Cửu Khâm",
    quocgia: "Phim Trung Quốc",
    theloai: "Phim Hành Động",
    phathanh: 2021,
    thoiluong: "90p",
    traler:"https://www.youtube.com/embed/HVnNVcfpSrE",
    videoful:"https://www.youtube.com/embed/CqvfgFNi_HU"
  },
  {
    id: 13,
    backgrou: "https://i.ytimg.com/vi/cCsQZQZLZB0/maxresdefault.jpg",
    name: "Quá Nhanh Quá Nguy Hiểm 8",
    anh: "https://img.phimchill.tv/images/film/qua-nhanh-qua-nguy-hiem-8.jpg",
    daodien: "F. Gary Gray",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Hành Động",
    phathanh: 2017,
    thoiluong: "120 phút",
    traler:"https://www.youtube.com/embed/bw2xcgJZdEM",
    videoful:"https://www.youtube.com/embed/N_3YgG8v5xo"
  },
  {
    id: 14,
    backgrou: "https://sphimle.com/wp-content/uploads/2021/07/Thoat-Chet-Out-of-Death-2021-1.jpg",
    name: "Thoát Chết",
    anh: "https://img.phimchill.tv/images/film/thoat-chet.jpg",
    daodien: "Mike Burns",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Chiếu Rạp",
    phathanh: 2021,
    thoiluong: "95 phút",
    traler:"https://www.youtube.com/embed/1oqbyvCCL_w",
    videoful:"https://www.youtube.com/embed/JOUJc-9DIdY"
  },
  {
    id: 15,
    backgrou: "https://cdnmedia.thethaovanhoa.vn/Upload/3uPkfvAxvuOpUQrmKeiDaA/files/2017/08/03/03sss/ve%20si.jpg",
    name: "Vệ Sĩ Sát Thủ",
    anh: "https://img.phimchill.tv/images/film/phim-em-bao-ke-va-anh-sat-thu-the-hitmans-bodyguard-201706690.jpg",
    daodien: "Patrick Hughes",
    quocgia: "Phim Âu Mỹ",
    theloai: "Phim Chiếu Rạp",
    phathanh: 2017,
    thoiluong: "111 phút",
    traler:"https://www.youtube.com/embed/hpjvAw3ey0s",
    videoful:"https://www.youtube.com/embed/ZXodr9btZXU"
  },
  {
    id: 16,
    backgrou: "https://files.giaoducthoidai.vn/Uploaded/thinhh/2019-08-02/qua-nhanh-qua-nguy-hiem-gdtd-6-CZFC.jpg",
    name: "Quá Nhanh Quá Nguy Hiểm Ngoại Truyện",
    anh: "https://img.phimchill.tv/images/film/qua-nhanh-qua-nguy-hiem-ngoai-truyen.jpg",
    daodien: "David Leitch",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Hành Động",
    phathanh: 2019,
    thoiluong: "120 phút",
    traler:"https://www.youtube.com/embed/gsREWcdAySM",
    videoful:"https://www.youtube.com/embed/R5TAgbvzES4"
  },
  {
    id: 17,
    backgrou: "https://www.studyphim.vn/system/movies/3477/thumbnails/original/battle.png",
    name: "Tử chiến liên hành tinh",
    anh: "https://img.phimchill.tv/images/film/tu-chien-lien-hanh-tinh.",
    daodien: "Edward James Olmos",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Viễn Tưởng ,Phim Hành Động  ",
    phathanh: 2009,
    thoiluong: "110 phút",
    traler:"https://www.youtube.com/embed/UMNK-LPYke0",
    videoful:"https://www.youtube.com/embed/Iad0bEqUdis"
  },
  {
    id: 18,
    backgrou: "https://ecdn.game4v.com/g4v-content/uploads/2021/01/Kimetsu-no-yaiba-Movie-1-game4v.jpg",
    name: "Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận",
    anh: "https://img.phimchill.tv/images/film/thanh-guom-diet-quy-chuyen-tau-vo-tan.jpg",
    daodien: "Haruo Sotozaki",
    quocgia: "Phim Nhật Bản",
    theloai: " Phim Hành Động  ",
    phathanh: 2020,
    thoiluong: "117 phút",
    traler:"https://www.youtube.com/embed/oJf81IYInc8",
    videoful:"https://www.youtube.com/embed/uTsEZggYBWw"
  },
  {
    id: 19,
    backgrou: "https://kenh14cdn.com/thumb_w/650/2016/1-1482533510374.jpg",
    name: "Lính Đánh Thuê Mercenary War",
    anh: "https://img.phimchill.tv/images/film/linh-danh-thue.jpg",
    daodien: "Jesse V. Johnson",
    quocgia: "Phim Âu Mỹ",
    theloai: "Phim Hành Động",
    phathanh: 2019,
    thoiluong: "90 phút",
    traler:"https://www.youtube.com/embed/qRadzVcXheQ",
    videoful:"https://www.youtube.com/embed/6VNx9Zb0WTc"
  },
  {
    id: 20,
    backgrou: "https://static.vphimzz.net/img/vpreview-Hetede7.jpg",
    name: "KHU VỰC CHẾT: CUỘC SĂN ĐUỔI",
    anh: "https://img.phimchill.tv/images/film/khu-vuc-chet-cuoc-san-duoi.jpg",
    daodien: "N/A",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Hành Động",
    phathanh: 2020,
    thoiluong: "90 phút",
    traler:"https://www.youtube.com/embed/cXaSVDXEPlQ",
    videoful:"https://www.youtube.com/embed/HEDRO7f1ezo"
  },
  {
    id: 21,
    backgrou: "https://s3img.vcdn.vn/123phim/2020/01/one-piece-le-hoi-hai-tac-one-piece-stampede-c13-15780188301799.jpg",
    name: "ONE PIECE: LỄ HỘI HẢI TẶC",
    anh: "https://dep.com.vn/wp-content/uploads/2019/12/poster-chinh-thuc-phim-one-piece-stampede.jpg",
    daodien: "Fansu Njie",
    quocgia: "Phim Nhật Bản",
    theloai: " Phim Hành Động  ",
    phathanh: 2019,
    thoiluong: "1 giờ 41 phút",
    traler:"https://www.youtube.com/embed/eLmx75b1Xx8",
    videoful:"https://www.youtube.com/embed/VZmR7QF4-DQ"
  },
  {
    id: 22,
    backgrou: "https://dx35vtwkllhj9.cloudfront.net/ifcfilms/demonic/images/regions/us/share.png",
    name: "DemoniC (2021)",
    anh: "https://img.phimchill.tv/images/film/goi-quy.jpg",
    daodien: "Neill Blomkamp",
    quocgia: "Phim Âu Mỹ",
    theloai: "Phim Ma - Kinh Dị",
    phathanh: 2021,
    thoiluong: "104 phút",
    traler:"https://www.youtube.com/embed/EYXLKC5xd7Q",
    videoful:"https://www.youtube.com/embed/EYXLKC5xd7Q"
  },
  {
    id: 23,
    backgrou: "https://i0.wp.com/www.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/615ef7a01767e038448a2668_the-night-house-1.jpg",
    name: "Ngôi Nhà Về Đêm",
    anh: "https://img.phimchill.tv/images/film/ngoi-nha-ve-dem.jpg",
    daodien: "David Bruckner",
    quocgia: "Phim Âu Mỹ",
    theloai: "Phim Ma - Kinh Dị",
    phathanh: 2020,
    thoiluong: "110 phút",
    traler:"https://www.youtube.com/embed/2Tshycci2ZA",
    videoful:"https://www.youtube.com/embed/UF7R1We96Mc"
  },
  {
    id: 24,
    backgrou: "https://doanhnhanplus.vn/wp-content/uploads/2020/03/DNP-Candyman-08032020-2.jpg",
    name: "Sát Nhân Trong Gương",
    anh: "https://img.phimchill.tv/images/film/sat-nhan-trong-guong.jpg",
    daodien: "Nia DaCosta",
    quocgia: "Phim Âu Mỹ",
    theloai: "Phim Ma - Kinh Dị",
    phathanh: 2021,
    thoiluong: "91 phút",
    traler:"https://www.youtube.com/embed/bHJKHtNmSY4",
    videoful:"https://www.youtube.com/embed/5vQoGqrgRyQ"
  },
  {
    id: 25,
    backgrou: "https://i.pinimg.com/originals/60/e7/0d/60e70d765ec84cacf330df7a6a1ff53f.jpg",
    name: "Iron Man 3 - Người sắt 3",
    anh: "http://i.imgur.com/fLvHZYc.jpg",
    daodien: "Shane Black",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Viễn Tưởng",
    phathanh: 2013,
    thoiluong: "131 phút",
    traler:"https://www.youtube.com/embed/HrhKPVtJSXc",
    videoful:"https://www.youtube.com/embed/MA4TVCoJ5CA"
  },
  {
    id: 26,
    backgrou: "https://i0.wp.com/www.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/60bcb044a6fedb56238ee0c4_ma-xui-quy-khien-1.jpg",
    name: "Ám Ảnh Kinh Hoàng 3: Ma Xui Quỷ Khiến",
    anh: "https://img.phimchill.tv/images/film/am-anh-kinh-hoang-3-ma-xui-quy-khien.jpg",
    daodien: "Michael Chaves",
    quocgia: "Phim Âu Mỹ",
    theloai: "Phim Ma - Kinh Dị",
    phathanh: 2021,
    thoiluong: "112 phut",
    traler:"https://www.youtube.com/embed/EZjWp2wqWcg",
    videoful:"https://www.youtube.com/embed/9yfxQMPjxqE"
  },
  {
    id: 27,
    backgrou: "https://s3.cloud.cmctelecom.vn/tinhte2/2019/01/4558034_0.jpg",
    name: "Robot Đại Chiến : Bumblebee",
    anh: "https://img.phimchill.tv/images/film/robot-dai-chien-bumblebee.jpg",
    daodien: "Travis Knight",
    quocgia: "Phim Âu Mỹ",
    theloai: "Phim Âu Mỹ",
    phathanh: 2018,
    thoiluong: "113 phút ",
    traler:"https://www.youtube.com/embed/NoJ6U6JIKTE",
    videoful:"https://www.youtube.com/embed/oedmhmM9t_Q"
  },
  {
    id: 28,
    backgrou: "https://ghienphimz.org/uploads/wQNzgMRFZDPe3B07lXb5SpJcL8Yv9Hq2_banner_.jpg?v=1632241886",
    name: "Trò chơi con mực",
    anh: "https://img.phimchill.tv/images/film/tro-choi-con-muc.jpg",
    daodien: "Hwang Dong-hyuk,",
    quocgia: "Phim Hàn Quốc",
    theloai: "Phim Ma - Kinh Dị",
    phathanh: 2021,
    thoiluong: "45p/tập(6)",
    traler:"https://www.youtube.com/embed/B7h331PDlag",
    videoful:"https://www.youtube.com/embed/IfgtzKt-NW8"
  },
  {
    id: 29,
    backgrou: "https://i.ytimg.com/vi/w16M7n0UGfw/maxresdefault.jpg",
    name: "Bạch Xà 2: Thanh Xà Kiếp Khởi",
    anh: "https://img.phimchill.tv/images/film/bach-xa-2-thanh-xa-kiep-khoi.jpg",
    daodien: "Huỳnh Gia Khương",
    quocgia: "Phim Trung Quốc",
    theloai: "Phim Chiếu Rạp ",
    phathanh: 2021,
    thoiluong: "131 phút",
    traler:"https://www.youtube.com/embed/8Ho619Y2xP4",
    videoful:"https://www.youtube.com/embed/M4gKud7F9mc"
  },
  {
    id: 30,
    backgrou: "https://genk.mediacdn.vn/2018/8/8/3-1533721812331101022749.jpg",
    name: "Monster Hunter: Huyền Thoại Hội Thợ Săn",
    anh: "https://img.phimchill.tv/images/film/monster-hunter-huyen-thoai-hoi-tho-san.jpg",
    daodien: "Steve Yamamoto",
    quocgia: "Phim Âu Mỹ",
    theloai: " Phim Viễn Tưởng",
    phathanh: 2021,
    thoiluong: "58 phút",
    traler:"https://www.youtube.com/embed/puQyZsaTtqY",
    videoful:"https://www.youtube.com/embed/HxT4FmggTHM"
  },
];
export default dataFull;