import React from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../componentes/Layout";
import Footer from "../componentes/Footer";
import Image from "next/image";
import inicioP1 from "../public/inicioP1.png";
import { top1, top2, top3 } from "../public/top/index";
import inicioP2 from "../public/inicioP2.png";
import { spine1, spine2 } from "../public/spine/index";
import inicioP3 from "../public/inicioP3.png";
import { mint1 } from "../public/mint/index";
import inicioP4 from "../public/inicioP4.png";
import { pantuflas1 } from "../public/pantuflas/index";
import inicioP5 from "../public/inicioP5.png";
import inicioP6 from "../public/inicioP6.png";
import { lavender1 } from "../public/lavender/index";
import inicioP7 from "../public/inicioP7.png";
import inicioP8 from "../public/inicioP8.png";
import { wrist1 } from "../public/wrist/index";
import inicioP9 from "../public/inicioP9.png";
import { kit1, kit2, kit3, kit4 } from "../public/kit/index";
import {herb1,herb2} from "../public/herb/index"
import { manta1,manta2 } from "../public/mantatermica/index";
import { topandlower1,topandlower2 } from "../public/topandlowerimagenes/index";
import { shoulder1,shoulder2 } from "../public/Shoulder/index";
import { back1,back2,back3 } from "../public/backbelt/index";
import {body1,body2,body3,body4} from "../public/body therapy/index"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Producto() {
  const router = useRouter();
  console.log(router.query.producto);
  const cartop = [inicioP1, top1, top2, top3];
  const carspine = [inicioP2, spine1, spine2];
  const carlavender = [inicioP6, lavender1];
  const carmint = [inicioP3, mint1];
  const carpantuflas = [inicioP4, pantuflas1];
  const carwrist = [inicioP8, wrist1];
  const carkit = [inicioP9, kit1, kit2, kit3, kit4];
  const carherb =[herb1,herb2]
  const carmanta = [manta1,manta2]
  const cartopandlower = [topandlower1,topandlower2]
  const carshoulder = [shoulder1,shoulder2]
  const carback= [back1,back2,back3] 
  const carbody= [body1,body2,body3,body4]
  const settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <Layout>
      <div>
        {router.query.producto == "topbodywrap" ? (
          <div className="producto-pag">
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {cartop.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>TOP BODY WRAP</h3>
              <p>
                Este producto esta dise??ado para colocarse alrededor del cuello,
                hombros y espalda superior.
                <br />
                <br />
                Contiene en su interior cal??ndula,limoncillo, romero, lavanda,
                poleo y trigo.
                <br />
                <br />
                Alivia dolores en hombros, cuello y pecho, puede utilizarse
                caliente o fr??o.
              </p>
              <br />
              <p><strong>Precio: $120.000</strong></p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20pagina%20web%20y%20me%20interesa%20el%20TOP%20BODY%20WRAP">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {/* segundo producto */}

        {router.query.producto == "spineandabdomentbelt" ? (
          <div className="producto-pag">
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carspine.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>SPINE & ABDOMEN BELT</h3>
              <p>
                Este producto esta dise??ado para aliviar dolores en espalda,
                cintura y abdomen, tiene dos tiras de velcro para sujetar de
                forma segura el producto,lo cual permite utilizarlo mientras se
                realiza cualquier tipo de actividad.
                <br />
                Contiene en su interior cal??ndula, limoncillo, romero, lavanda,
                poleo y trigo.
                <br />
                Puedes utilizar el producto en caliente y fri??.
              </p>
              <br />
              <p><strong>Precio: $120.000</strong></p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20pagina%20web%20y%20me%20interesa%20el%20SPINE%20AND%20ABDOMEN%20BELT">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {/* tercer producto */}

        {router.query.producto == "lavendereyepillow" ? (
          <div className="producto-pag">
            
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carlavender.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>LAVENDER EYE PILLOW</h3>
              <p>
                Este producto tiene por dentro flores de lavanda la cual es una
                flor sedante de origen natural y semillas de linaza que act??an
                como un conductor de calor y fr??o, el producto esta dise??ado
                para ajustarse alrededor de los ojos, se utiliza para reducir
                dolores de cabeza, migra??a, estr??s, insomnio,fatiga ocular y
                act??a como un sedante suave y natural para promover el sue??o.
                <br />
                <br />
                ??????Util??zalo en fr??o meti??ndolo dentro de tu congelador
              </p>
              <br />
              <p><strong>Precio: $60.000</strong></p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20pagina%20web%20y%20me%20interesa%20el%20LAVERDER%20EYE%20PILLOW">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {/* cuarto producto */}

        {router.query.producto == "mintpillow" ? (
          <div className="producto-pag">
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carmint.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>MINT PILLOW</h3>
              <p>
                El Mint Pillow es un producto que en su interior contiene
                semillas y hierbas trituradas de menta, eucalipto y linaza, su
                funci??n principal es penetrar profundamente en las v??as
                respiratorias y descongestionarlas.
                <br />
                <br />
                Este producto esta dise??ado para utilizarse fr??o o caliente.
              </p>
              <br />
              <p><strong>Precio: $60.000</strong></p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20pagina%20web%20y%20me%20interesa%20el%20MINT%20PILLOW">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {/* Quinto producto */}

        {router.query.producto == "pantuflastermicas" ? (
          <div className="producto-pag">
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carpantuflas.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>PANTUFLAS T??RMICAS</h3>
              <p>
                Las Pantuflas t??rmicas , contienen en su interior hierbas,
                flores y semillas, ideales para mejorar la circulaci??n y
                desinflamar, proporciona un descanso inmediato.
                <br />
                <br />
                Pueden utilizarse en caliente o en fr??o.
                <br />
                <br />
              <p><strong>Precio: $200.000</strong></p>
              </p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20pagina%20web%20y%20me%20interesan%20las%20ANTUFLAS%20T%C3%89RMICAS">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {/* sexto producto */}

        {router.query.producto == "lumbarpack" ? (
          <div className="producto-pag">
            <div className="imagen-p-page">
              <Image
                src={inicioP7}
                width="450"
                height="600"
                priority
                objectFit="cover"
                fill
                blur
              />
            </div>
            <div className="descripcion">
              <h3>LUMBAR PACK</h3>
              <p>
                El Lumbar Pack, es una almohada multifuncional que se puede
                utilizar en cualquier parte del cuerpo, es ideal para trabajar,
                c??licos, dolores lumbares, cervicales, dolores en los hombros,
                dolores en las articulaciones y dolores musculares.
              </p>
              <br />
              <p><strong>Precio: $80.000</strong></p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20pagina%20web%20y%20me%20interesa%20el%20LUMBAR%20PACK">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {/* septimo producto */}

        {router.query.producto == "kneepack" ? (
          <div className="producto-pag">
            <div className="imagen-p-page">
              <Image
                src={inicioP5}
                width="450"
                height="600"
                priority
                objectFit="cover"
                fill
                blur
              />
            </div>
            <div className="descripcion">
              <h3>NKEE PACK</h3>
              <p>
                El Knee Pack, es una almohada dise??ada para aliviar dolores
                producidos en la rodilla, el tobillo y el codo, trae dos tiras
                de velcro para ajustar el producto a la zona deseada sin que
                este se caiga. 
                <br/>
                <br/>
                El producto est?? dise??ado para utilizarlo en
                caliente o en fr??o.
              </p>
              <br />
              <p><strong>Precio: $80.000</strong></p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20pagina%20web%20y%20me%20interesa%20el%20LUMBAR%20PACK">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {/* octavo producto */}

        {router.query.producto == "wristpack" ? (
          <div className="producto-pag">
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carwrist.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>WRIST PACK</h3>
              <p>
                Este producto contiene una mezcla de hierbas, flores y semillas
                antiinflamatorias, es ideal para tratar el s??ndrome del t??nel
                carpiano, artritis, tendinitis, retracci??n muscular,
                inflamaci??n, quemaduras o cualquier tipo de dolor en la mano o
                la mu??eca.
                <br />
                <br />
                El producto est?? dise??ado para utilizarlo en caliente o en fr??o
              </p>
              <br />
              <p><strong>Precio: $80.000</strong></p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20interesa%20el%20WRIST%20PACK">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {router.query.producto == "premiumset" ? (
          <div className="producto-pag">
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carkit.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>PREMIUM TREATMENT SET</h3>
              <p>
                El premium treatment set es un kit que contiene 4 productos que
                proporcionan un alivio eficaz para los dolores y promueven la
                relajaci??n, dentro de este kit encontrar??s:
                <br />
                <br />
                -1 Almohadilla para cuello, pecho y hombros.
                <br />
                -1 Almohadilla para espalda, abdomen y cintura.
                <br />
                -1 Almohadilla para ojos.
                <br />
                -1 Almohadilla nasal
              </p>
              <br />
              <p><strong>Precio: $300.000</strong></p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20interesa%20el%20PREMIUM%20TREATMENT%20SET">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {router.query.producto == "herbpack" ? (
          <div className="producto-pag">
            <div className="container  carousel container-car">
              <Slider {...settings}>
                {carherb.map((i) => (
                  <div className="card-wrapper" key={i}>
                    <div className="card">
                      <div className="imagen-p-page">
                        <Image
                          src={i}
                          width="520"
                          height="600"
                          priority
                          objectFit="cover"
                          fill
                          blur
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="descripcion">
              <h3>HERB PACK</h3>
              <p>
              El HERB PACK, es una almohada multifuncional que se puede utilizar en cualquier parte del cuerpo, es ideal para trabajar, c??licos, dolores lumbares, cervicales, dolores en los hombros, dolores en las articulaciones y dolores musculares. 
              </p>
              <br />
              <p><strong>Precio: $70.000</strong></p>
              <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20interesa%20el%20HERB%20PACK">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
            </div>
          </div>
        ) : null}

        {router.query.producto == "topandlower" ? (
                  <div className="producto-pag">
                    <div className="container  carousel container-car">
                      <Slider {...settings}>
                        {cartopandlower.map((i) => (
                          <div className="card-wrapper" key={i}>
                            <div className="card">
                              <div className="imagen-p-page">
                                <Image
                                  src={i}
                                  width="520"
                                  height="600"
                                  priority
                                  objectFit="cover"
                                  fill
                                  blur
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="descripcion">
                      <h3>TOP AND LOWER</h3>
                      <p>
                      EL TOP AND LOWER est?? dise??ado para aliviar dolores generalizados en la espalda, hombros y pecho.
                      <br/>
                      <br/>
                      Contiene en el interior trigo, lavanda, romero,limoncillo, cal??ndula,manzanilla, poleo y romero. 
                      <br/>
                      <br/>
                      Este producto solo se puede calentar en horno microondas.
                      </p>
                      <br />
              <p><strong>Precio: $320.000</strong></p>
                      <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20interesa%20el%20TOP%20AND%20LOWER">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
                    </div>
                  </div>
                ) : null}

{router.query.producto == "manta" ? (
                  <div className="producto-pag">
                    <div className="container  carousel container-car">
                      <Slider {...settings}>
                        {carmanta.map((i) => (
                          <div className="card-wrapper" key={i}>
                            <div className="card">
                              <div className="imagen-p-page">
                                <Image
                                  src={i}
                                  width="520"
                                  height="600"
                                  priority
                                  objectFit="cover"
                                  fill
                                  blur
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="descripcion">
                      <h3>MANTA T??RMICA</h3>
                      <p>
                      La MANTA T??RMICA esta dise??ada  para utilizarse en cualquier parte del cuerpo, es ideal para promover el sue??o y la relajaci??n gracias a su combinaci??n de hierbas relajantes y su incre??ble confort.
                      <br/>
                      <br/>
                      Contiene en el interior trigo, lavanda,romero, limoncillo, calendula, manzanilla, poleo y Romero. 
                      <br/>
                      <br/>
                      Este producto solo se puede calentar en horno microondas.
                      </p>
                      <br />
              <p><strong>Precio: $320.000</strong></p>
                      <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20interesa%20el%20MANTA%20T%C3%89RMICA">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
                    </div>
                  </div>
                ) : null}

{router.query.producto == "shoulder" ? (
                  <div className="producto-pag">
                    <div className="container  carousel container-car">
                      <Slider {...settings}>
                        {carshoulder.map((i) => (
                          <div className="card-wrapper" key={i}>
                            <div className="card">
                              <div className="imagen-p-page">
                                <Image
                                  src={i}
                                  width="520"
                                  height="600"
                                  priority
                                  objectFit="cover"
                                  fill
                                  blur
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="descripcion">
                      <h3>SHOULDER PACK</h3>
                      
              <p>
                Este producto esta dise??ado para colocarse alrededor del cuello,
                hombros y espalda superior.
                <br />
                <br />
                Contiene en su interior cal??ndula,limoncillo, romero, lavanda,
                poleo y trigo.
                <br />
                <br />
                Alivia dolores en hombros, cuello y pecho, puede utilizarse
                caliente o fr??o.
              </p>
              
                      <br />
              <p><strong>Precio: $110.000</strong></p>
                      <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20interesa%20el%20SHOULDER%20PACK">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
                    </div>
                  </div>
                ) : null}

{router.query.producto == "backandabdoment" ? (
                  <div className="producto-pag">
                    <div className="container  carousel container-car">
                      <Slider {...settings}>
                        {carback.map((i) => (
                          <div className="card-wrapper" key={i}>
                            <div className="card">
                              <div className="imagen-p-page">
                                <Image
                                  src={i}
                                  width="520"
                                  height="600"
                                  priority
                                  objectFit="cover"
                                  fill
                                  blur
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="descripcion">
                      <h3>BACK & ABDOMENT BELT</h3>
                      <p>
                      Este producto est?? dise??ado para aliviar c??licos, dolores de espalda y cintura, posee una tira de velcro para que se pueda ajustar a tu cuerpo y realices actividades sin que est?? se caiga. 
                      <br/>
                      <br/>
                      Contiene en su interior nuestra combinaci??n especial de flores, hierbas y semillas.
                      <br/>
                      <br/>
                      Puedes utilizarlo en caliente o en fr??o.
                      </p>
                      <br />
              <p><strong>Precio: $110.000</strong></p>
                      <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20interesa%20el%20BACK%20&%20ABDOMENT%20BELT">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
                    </div>
                  </div>
                ) : null}
              {router.query.producto == "bodytherapy" ? (
                  <div className="producto-pag">
                    <div className="container  carousel container-car">
                      <Slider {...settings}>
                        {carbody.map((i) => (
                          <div className="card-wrapper" key={i}>
                            <div className="card">
                              <div className="imagen-p-page">
                                <Image
                                  src={i}
                                  width="520"
                                  height="600"
                                  priority
                                  objectFit="cover"
                                  fill
                                  blur
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="descripcion">
                      <h3>BODY THERAPY</h3>
                      <p>
                      Este producto est?? dise??ado para utilizarse de manera multifuncional en varias zonas del cuerpo.
                      <br/>
                      <br/>
                      Contiene en su interior nuestra colecci??n de hierbas, flores y semillas.
                      <br/>
                      <br/>
                      Este producto est?? dise??ado para utilizarse en caliente o en fr??o. 
                      </p>
                      <br />
              <p><strong>Precio: $140.000</strong></p>
                      <div className="btn-only">
                <a  href="https://api.whatsapp.com/send?phone=+573045823787&text=Hola!%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20interesa%20el%20BODY%20THERAPY">
                <button className="calltoaction">COMPRAR</button>
                  </a>
              </div>
                    </div>
                  </div>
                ) : null}
              </div>

      <Footer />
    </Layout>
  );
}
