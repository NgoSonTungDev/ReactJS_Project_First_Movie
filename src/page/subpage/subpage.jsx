import React, { useState, useEffect } from "react";
import Menu from "../../components/menu/menu";
import dataFull from "../../assest/dataFull";
import { useLocation, useHistory } from "react-router-dom";
import Footer from "../../components/footer/footer";
import "./subpage.css";
import Card from "../../components/card/card";

const SubPage = () => {
  const location = useLocation();
  const history = useHistory();

  // pathname là vai path (đường dẫn) /split || cắt
  const id = location.pathname.split("movie/")[1];
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);


  useEffect(async () => {
    window.scrollTo(0, 0);
    //parseInt() chuyển string sang int
    await setData(dataFull[parseInt(id) - 1]);

    let theloai = dataFull[parseInt(id) - 1].theloai;
    await setData2(
      dataFull.filter((item) =>
        item?.theloai?.toLocaleLowerCase()?.includes(theloai?.toLocaleLowerCase())
      )
    );
    
  }, []);

  const moveToPageMovie = () => {
    history.push(`/movie/pagemovie/${id}`);
  };

  return (
    <div className="container2">
      <div className="menuto">
        <Menu />
      </div>
      <div className="content-img-phim">
        <div className="itroduction-pim">
          <div className="itroduction-pim-bg">
            <img src={data.backgrou} alt="" />
          </div>
          <div className="introduction-pim-name">
            <div className="pim-name-img">
              <img src={data.anh} alt="" />
            </div>
            <div className="pim-name">
              <i>{data.name}</i>
              <div className="phim-name">
                <a href="#tralerphim">
                  <button>
                    <span>
                      <i class="fab fa-google-play"></i>
                    </span>
                    <span>
                      <h4>XEM</h4>
                    </span>
                    Traler
                  </button>
                </a>
                <a href="">
                  <button onClick={moveToPageMovie}>
                    <span className="bgSpan">
                      <i class="fas fa-play"></i>
                    </span>
                    <span className="bgSpan">
                      <h4>XEM</h4>
                    </span>
                    Xem phim
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr width="70%" />
      <div className="fim-information">
        <div className="fim-information-text">
          <p>
            <i class="fas fa-home the-i"></i> Xem phim
            <i class="fas fa-arrow-right the-i"></i> {data.theloai}
            <i class="fas fa-arrow-right the-i"></i> {data.name}
          </p>
        </div>
        <div className="fim-information-text2">
          <div className="fim-text2">
            <p>
              <i className="the-i">Thể loại : </i>
              {data.theloai}
            </p>
            <p>
              <i className="the-i">Quốc gia : </i> {data.quocgia}
            </p>
          </div>
          <div className="fim-text2">
            <p>
              <i className="the-i">Năm phát hàng : </i>
              {data.phathanh}
            </p>
            <p>
              <i className="the-i">Đạo diễn : </i> {data.daodien}
            </p>
          </div>
          <div className="fim-text2">
            <p>
              <i className="the-i"> Thời lượng : </i>
              {data.thoiluong}
            </p>
            <p>
              <i className="the-i">Tập : </i> FULL
            </p>
          </div>
        </div>
        <hr width="100%" />
        <div className="bonus-ifor-fim">
          <h3 className="the-i">Giới thiệu phim : </h3>
          <p className="the-p">
            <i className="the-i-2">{data.name}</i> : Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Atque velit officiis ut, beatae
            accusamus porro molestiae deleniti a autem doloremque nisi
            reprehenderit maiores necessitatibus eos quo minima tenetur sequi
            eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Provident cupiditate suscipit ipsam maxime natus fugiat. Adipisci
            est perspiciatis nam esse totam. Cupiditate quidem natus totam
            aspernatur nemo at facilis sunt?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Recusandae aliquam laboriosam laborum
            quaerat id possimus quod dolore voluptatum numquam, dolores eum, quo
            atque ratione sint delectus quasi deleniti voluptates accusamus?
            <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Corrupti at perspiciatis quibusdam nostrum molestiae nam quae
            voluptatem, animi repudiandae natus id harum deleniti minima,
            accusamus obcaecati, eos officia et dicta! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aperiam earum ducimus rem quae
            veniam ipsum architecto. Temporibus id, totam quam ipsum nam
            consequuntur cumque esse blanditiis delectus illo? Laboriosam,
            debitis. <br /> <br /> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nemo voluptatem molestiae optio corrupti unde
            omnis debitis natus eos saepe odio! Voluptas nostrum temporibus
            alias veritatis minus rerum? Odit, totam velit? Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Dignissimos delectus
            reprehenderit deleniti. Labore, ipsa iure. Quae quam blanditiis
            architecto! Quaerat alias, consectetur voluptatem temporibus natus
            molestiae vel quasi aliquid modi.
          </p>
        </div>
        <hr width="100%" />
        <div className="traler" id="tralerphim">
          <div className="traler-name">
            <h3 className="the-i">Traler phim : </h3>
            <p>{data.name}</p>
          </div>
          <div className="traler-phim">
            <iframe
              width="100%"
              height="595px"
              src={data.traler}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <hr width="100%" />
        <div className="conment">
          <h3 className="the-i">Bình luận</h3>
          <div className="box-content">
            <div className="box-iput">
              <img
                src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/83226345_494029134854913_2721169718286221312_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=THRsosi3cD8AX8aqMaO&_nc_ht=scontent.fdad3-1.fna&oh=dfd9a1772d69b6d94e8566fdc3e883c8&oe=618BD20D"
                alt=""
              />
              <input type="text" placeholder="Thêm bình luận" />
              <div className="star">
                <img
                  src="https://phimchill.tv/media/img/star-on.png"
                  alt=""
                  title="Dở tệ"
                />
                <img
                  src="https://phimchill.tv/media/img/star-on.png"
                  alt=""
                  title="Dở"
                />
                <img
                  src="https://phimchill.tv/media/img/star-on.png"
                  alt=""
                  title="Không hay"
                />
                <img
                  src="https://phimchill.tv/media/img/star-on.png"
                  alt=""
                  title="Không hay lắm"
                />
                <img
                  src="https://phimchill.tv/media/img/star-on.png"
                  alt=""
                  title="Bình thường"
                />
                <img
                  src="https://phimchill.tv/media/img/star-on.png"
                  alt=""
                  title="Xem được"
                />
                <img
                  src="https://phimchill.tv/media/img/star-on.png"
                  alt=""
                  title="Hay"
                />
                <img
                  src="https://phimchill.tv/media/img/star-on.png"
                  alt=""
                  title="Rất hay"
                />
                <img
                  src="https://phimchill.tv/media/img/star-on.png"
                  alt=""
                  title="Tuyệt cmn vời !"
                />
              </div>
              <button>Bình Luận</button>
            </div>
            <div className="box-cmt">
              <div className="box-cmt-user">
                <div className="box-cmt-img">
                  <img
                    src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/61498138_309841149940380_7837659546708344832_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=NPisqkKmlpMAX-RMU5H&_nc_ht=scontent.fdad3-3.fna&oh=27292751c19e1f36901d153853ce0cfb&oe=618B7B5D"
                    alt=""
                  />
                </div>
                <div className="box-comment-user">
                  <h4>Tùng coder</h4>
                  <p>wed xịn, phim hay , tuyệt vời</p>
                  <div className="like-phanhoi">
                    <a href="">Thích</a>
                    <a href="">Phản hồi</a>
                  </div>
                </div>
              </div>
              <div className="box-cmt-user">
                <div className="box-cmt-img">
                  <img
                    src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.18169-9/13413507_587938521380785_6145573083956033976_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=wuWqkrpzvf4AX_0-9_m&_nc_oc=AQne3oYMVB-G3mJ_MRbiAFTwpqoqwSlTXCYAwguH_S5vsoITtv2txjR9IMB2uJeIyNA&_nc_ht=scontent.fdad3-4.fna&oh=3250d828022c5fda4c2985581b760a28&oe=618C5014"
                    alt=""
                  />
                </div>
                <div className="box-comment-user">
                  <h4>Đạt dao</h4>
                  <p>Ad siêu cấp vip pro , số 1</p>
                  <div className="like-phanhoi">
                    <a href="">Thích</a>
                    <a href="">Phản hồi</a>
                  </div>
                </div>
              </div>
              <div className="box-cmt-user">
                <div className="box-cmt-img">
                  <img
                    src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/83875476_2448757805414768_8254845502243347031_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=oXIxUtYD7_IAX-2e3Ho&tn=ytkgfYUw3ZDnU2OF&_nc_ht=scontent.fdad3-4.fna&oh=bd718919dea001b2ae143cd8eebaa436&oe=618D2F5C"
                    alt=""
                  />
                </div>
                <div className="box-comment-user">
                  <h4>Tuấn của sương</h4>
                  <p>Wed đẹp như thu sương của e vậy a ơi</p>
                  <div className="like-phanhoi">
                    <a href="">Thích</a>
                    <a href="">Phản hồi</a>
                  </div>
                </div>
              </div>
              <div className="box-cmt-user">
                <div className="box-cmt-img">
                  <img
                    src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.6435-9/61616434_211290503165259_3789012477719609344_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=fq1emHMIAIQAX_5f53Z&_nc_ht=scontent.fdad3-2.fna&oh=52d112b044c3091bc7dca22db956fc7b&oe=618CBB78"
                    alt=""
                  />
                </div>
                <div className="box-comment-user">
                  <h4>Phú của vi</h4>
                  <p>Nhân vật nó ngon như ny của em </p>
                  <div className="like-phanhoi">
                    <a href="">Thích</a>
                    <a href="">Phản hồi</a>
                  </div>
                </div>
              </div>
              <div className="box-cmt-user">
                <div className="box-cmt-img">
                  <img
                    src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/138230780_2708637109466557_6331355407065353022_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=db4YQQYB5_AAX9Np3l_&_nc_ht=scontent.fdad3-1.fna&oh=f456002604c8b7f448b8cdc30ba39491&oe=618C53F1"
                    alt=""
                  />
                </div>
                <div className="box-comment-user">
                  <h4>Ông hoàng bầu đá</h4>
                  <p>làm thêm page bán rượi onl để vừa uống vừa xem ad ơi</p>
                  <div className="like-phanhoi">
                    <a href="">Thích</a>
                    <a href="">Phản hồi</a>
                  </div>
                </div>
              </div>
              <div className="box-cmt-user">
                <div className="box-cmt-img">
                  <img
                    src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/p130x130/242774906_911457269778762_6375915327040477693_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=dbeb18&_nc_ohc=OEY5EGa3X0YAX--PAq_&_nc_ht=scontent.fdad3-3.fna&oh=e2d9adf813f618e15d58cbc80163caed&oe=618C32E9"
                    alt=""
                  />
                </div>
                <div className="box-comment-user">
                  <h4>Nữ hoàng chính tả</h4>
                  <p>Phim hay nhứt nách anh tùng ơi</p>
                  <div className="like-phanhoi">
                    <a href="">Thích</a>
                    <a href="">Phản hồi</a>
                  </div>
                </div>
              </div>
              <div className="box-cmt-user">
                <div className="box-cmt-img">
                  <img
                    src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-1/c0.67.200.200a/p200x200/152791481_1293431677699613_4547947720820340684_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6xWW7w90cWwAX_IdDKt&tn=ytkgfYUw3ZDnU2OF&_nc_ht=scontent.fdad3-4.fna&oh=b37e7ccf0c63f792b6acf5067fb3c2ef&oe=618A1666"
                    alt=""
                  />
                </div>
                <div className="box-comment-user">
                  <h4>Dân chơi nữa mùa</h4>
                  <p>Đỉnh của chóp , xuất sắc hay từng chi tiết</p>
                  <div className="like-phanhoi">
                    <a href="">Thích</a>
                    <a href="">Phản hồi</a>
                  </div>
                </div>
              </div>
              <div className="box-cmt-user">
                <div className="box-cmt-img">
                  <img
                    src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/65700376_870385540009079_7654789906648006656_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=P38osnF__koAX8l8QSe&_nc_ht=scontent.fdad3-1.fna&oh=6ddab9fbcc6c66885dd920e24e723dd0&oe=618AA831"
                    alt=""
                  />
                </div>
                <div className="box-comment-user">
                  <h4>Tk trùm Hà Tĩnh</h4>
                  <p>ahihi, hay quá ad oi , tuyệt vời</p>
                  <div className="like-phanhoi">
                    <a href="">Thích</a>
                    <a href="">Phản hồi</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr width="100%" />
        <div className="bonusPhim-theloai">
          <h3 className="the-i">Phim cùng thể loại : {data.theloai}</h3>

          <div className="phimCungTheLoai">
            {data2.map((item) => (
              <Card phim={item} />
            ))}
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SubPage;
