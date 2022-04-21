import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./pagemovie.scss";
import Card from "../../components/card/card";
import dataFull from "../../assest/dataFull";
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import { Rating } from "semantic-ui-react";
import Carousel from "react-multi-carousel";

const PageMovie = () => {
  const location = useLocation();
  const id = location.pathname.split("movie/pagemovie/")[1];
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);


  useEffect(async() => {
    window.scrollTo(0, 0);
    await setData(dataFull[parseInt(id) - 1]);
    let theloai = dataFull[parseInt(id) - 1].theloai;
    await setData2(
      dataFull.filter((item) =>
        item?.theloai?.toLocaleLowerCase()?.includes(theloai?.toLocaleLowerCase())
      )
    );
  }, []);

  const btnchange = () => {
    var den = document.getElementById("den");
    var tatden = document.getElementById("tatden");
    var boxvideo = document.getElementById("boxvideo");
    var container = document.getElementById("container");
    var mat1 = document.getElementById("mat1");
    var mat2 = document.getElementById("mat2");
    var mat3 = document.getElementById("mat3");
    var mat4 = document.getElementById("mat4");
    if (den.src == "https://cdn-icons-png.flaticon.com/128/2910/2910914.png") {
      tatden.innerHTML = "Bật đèn";
      den.src = "https://cdn-icons-png.flaticon.com/128/3939/3939214.png";
      boxvideo.classList.add("glow");
      container.style.background="#000";
      mat1.style.display ="none"
      mat2.style.display ="none"
      mat3.style.display ="none"
      mat4.style.display ="none"
      window.scrollTo(0, 0);
    } else {
      tatden.innerHTML = "Tắt đèn";
      den.src = "https://cdn-icons-png.flaticon.com/128/2910/2910914.png";
      boxvideo.classList.remove("glow");
      container.style.background="#1a1a1a";
      mat1.style.display ="block"
      mat2.style.display ="block"
      mat3.style.display ="block"
      mat4.style.display ="block"
    }
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="container4" id="container">
      <div className="menutop" id="mat1">
        <Menu />
      </div>
      <div class="name_wed" id="mat2">
        <p>STungmovie.com</p>
        <hr width="70%" />
      </div>

      <div className="content">
        <h3 className="textcolor"> Bạn đang xem phim : {data.name} </h3>
        <div className="boxvideo " id="boxvideo">
          <iframe
            width="100%"
            height="100%"
            src={data.videoful}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="duoivideo">
          <div className="danhgia">
            <p className="textcolor">
              Đánh giá của bạn :{" "}
              <Rating maxRating={10} icon="star" defaultRating={3} clearable />
            </p>
          </div>
          <div className="chucnang">
            <p className="textcolor">TẬP : FULL</p>
            <div className="tatden" onClick={btnchange}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2910/2910914.png"
                alt=""
                id="den"
              />
              <p id="tatden">Tắt đèn</p>
            </div>
          </div>
        </div>
        <hr width = "100%"/>
        <div className="tomtatphim" id="mat4">
          <h3 className="textcolor"> Tóm tắt nội dung Phim :</h3>
          <p>
            {data.name} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad consectetur quibusdam culpa non neque expedita tempora! Quisquam
            exercitationem, veniam, sapiente doloribus ad unde quis quaerat
            quidem nesciunt delectus cum laboriosam? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Necessitatibus, tempora commodi omnis
            suscipit dolorem odio optio dicta labore atque cupiditate sit,
            reprehenderit sapiente repellendus ad consectetur facere est impedit
            possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br />
            Hic incidunt magni perferendis deleniti expedita vel porro
            doloremque provident, deserunt optio quos nisi! Nemo praesentium
            libero quaerat itaque fuga officia provident. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Blanditiis consectetur asperiores
            dicta maiores quia animi reiciendis pariatur atque! Dolore illum
            obcaecati unde fugiat, corrupti laborum dignissimos! Itaque facilis
            quas dolorem! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. <br /> Quae nesciunt nihil reprehenderit voluptatum vel non illo?
            Mollitia excepturi ipsum sunt optio, porro, quidem, sint eligendi
            eveniet aperiam vitae cumque necessitatibus! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consectetur numquam distinctio
            soluta, unde quia at earum alias in. <br /> Unde eaque nemo consequuntur
            debitis quaerat accusamus voluptatibus perspiciatis aut a dolorem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            sequi in ut soluta?  <br /> Magni, tempore voluptate! Velit iste molestias
            quos, tempore rem numquam voluptatem pariatur laudantium tenetur,
            natus quod ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tenetur, quasi, ullam doloribus nemo tempore ipsa laudantium
            dicta eaque aliquam optio perspiciatis provident quibusdam et sunt
            maxime ut excepturi sint repudiandae?
          </p>
        </div>
        <hr width="100%"/>
        <div className="bonusphim" id="mat3">
          <h3 className="textcolor" >Có thể bạn cũng muốn xem :</h3>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          className="carosel "
        >
          {data2.map((item) => (
            <Card phim={item} />
          ))}
        </Carousel>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default PageMovie;
