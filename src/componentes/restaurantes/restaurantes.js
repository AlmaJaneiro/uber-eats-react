import React, { Component } from "react";
import { Button, Card, Row, Col} from "react-bootstrap";

import miniatura from '../../assets/img/min-restaurante.svg';

import "./restaurante.css";

export default class Restaurante extends Component {
    
    constructor(props) {
      super(props);
      
    }
    render() {
        const elements = [{
                "nombre": "Vips",
                "tipo": "Comida Mexicana",
                "descripcion": "En Vips premiamos tu lealtad, mientras más nos visites más descuento tienes. Ordena a Domicilio. Tarjeta de Lealtad. Tienda de Accesorios. Descarga tus Cupones. Obsequios para Niños. Servicios adicionales: Desayunos, Almuerzos, Cenas, Menú Infantil, Postres.",
                "costo_envio": "35",
                "img": "https://lideresmexicanos.com/wp-content/uploads/2018/08/Vips03.jpg"
        },
        {
                "nombre": "Costeñito",
                "tipo": "Antojitos",
                "descripcion": "Restaurant bar de mariscos con un ambiente único. Ve a disfrutar de sus mariscos frescos, ponte bien playa en Costeñito.                ",
                "costo_envio": "20",
                "img": "http://elcostenito.mx/wp-content/uploads/2016/06/titulo_sucursales2.png"
        }, 
            {
                "nombre": "Mangos",
                "tipo": "Alitas y Hamburguesas",
                "descripcion": "Nuestra historia comenzó hace un año y ustedes fueron los personajes principales! Este 4 y 5 de octubre los esperamos en Mangos para celebrar nuestro aniversario #drinks y #sorpresas #llegamosParaQuedarnos",
                "costo_envio": "15",
                "img": "https://www.everythingperu.com/media/reviews/photos/thumbnail/1500x500s/c3/12/98/19-54-1466001736.jpg"
            }, 
            {
                "nombre": "Descanso",
                "tipo": "Desayunos",
                "descripcion": "LOS ESPERAMOS ESTE 15 DE SEPTIEMBRE A CELEBRAR NUESTRAS FIESTAS PATRIAS DE 8:00 AM A 2:00 PM ESTAREMOS REGALANDO RIQUISIMOS ELOTES NO FALTES! ! VIVA MEXICO !",
                "costo_envio": "20",
                "img": "https://u.tfstatic.com/restaurant_photos/483/205483/169/612/el-descanso-1927-vista-terraza-6b18f.jpg"
            }, 
            {
                "nombre": "65",
                "tipo": "Comida Corrida",
                "descripcion": "La comida de antaño debe degustarse en familia, en ambientes cálidos y hogareños,por eso en Almozero ofrecemos un servicio personalizado, acogedor, brindado por jóvenes que nos hacen sentir en casa",
                "costo_envio": "35",
                "img": "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2018/06/restaurantes-bonitos-cdmx-aromas-.jpg"
            }, 
            {
                "nombre": "Dominos",
                "tipo": "Pizzas",
                "descripcion": "Domino's Pizza es una empresa estadounidense de restaurantes de comida rápida, especializada en la elaboración de pizzas. La empresa fue fundada en 1960 por Tom Monaghan, quien cinco años antes había abierto su primera pizzería en Ypsilanti.",
                "costo_envio": "15",
                "img": "https://darkroom.contagious.com/1380/ab373ce2ca9b1e442186169bc4c41590:7cc5dae8f662a3abc1b77eaf95173bcd/dominospizza-lead-image.jpg"
            }, 
            {
                "nombre": "Don Pastor",
                "tipo": "Tacos al Pastor",
                "descripcion": "Don Pastor Taquerías, Puebla de Zaragoza. 41 mil Me gusta. Disfruta la increíble experiencia de comer con nosotros. Don Pastor es un concepto único ",
                "costo_envio": "25",
                "img": "https://media-cdn.tripadvisor.com/media/photo-s/12/48/df/f6/subale-subale-hay-lugares.jpg"
            }, 
           {
                "nombre": "La Oriental",
                "tipo": "Tacos Árabes",
                "descripcion": "Durante 81 años, Antigua Taquería la Oriental, ha perfeccionado la elaboración de tacos árabes cuyo sabor ha sido alabado por miles de clientes satisfechos.",
                "costo_envio": "30",
                "img": "https://pueblados22.mx/wp-content/uploads/2017/03/image.jpg"
            }, 
            {
                "nombre": "Las Ranas",
                "tipo": "Tacos al Pastor",
                "descripcion": "Los tacos al pastor, de adobada​ o de trompo​ son la variedad de tacos más populares en la mayor parte de México.​​ El modo de preparación de la carne es la característica más distintiva.",
                "costo_envio": "15",
                "img": "https://66.media.tumblr.com/11bc8adc0127c165a7a61c3a30bb773f/tumblr_nqlpmqA8El1slm5hwo1_1280.jpg"
            }, 
            {
                "nombre": "El Carmen",
                "tipo": "Cemitas",
                "descripcion": "Deliciosas y tradicionales Cemitas de Puebla. Contamos con instalaciones limpias, excelente servicio y precio. ¡Visítanos!",
                "costo_envio": "35",
                "img": "https://www.yosoypuebla.com/wp-content/uploads/2017/05/cemita-carmen-puebla.jpg"
            }, 
            {
                "nombre": "Mc Donalds",
                "tipo": "Hamburguesas",
                "descripcion": "McDonald's es una cadena de restaurantes de comida rápida estadounidense. Sus principales productos son las hamburguesas, las papas fritas, los menús para el desayuno, los refrescos, los batidos, los helados, los postres y, recientemente, las ensaladas de fruta y otros productos exclusivos para diversos países.",
                "costo_envio": "15",
                "img": "https://www.dream-alcala.com/wp-content/uploads/2018/12/mcdonalds_hamburguesas_menu.jpg"
            }, 
            {
                "nombre": "Super Natural",
                "tipo": "Ensaladas",
                "descripcion": "Food is the ingredient that binds us together, and what better place to look than at Super Natural Food.",
                "costo_envio": "25",
                "img": "http://gritsandgrids.s3.amazonaws.com/media/2018/06/gibraltar_counter.jpg"
            }
        ];
        return (
            <>
                <section id="restaurantes">
                    <h3>Restaurantes Cercanos</h3>
                    <Row>
                        {elements.map((value,datos) => {
                            return  <Col xs={12} md={4} key={value.nombre.toString()} value={value.nombre}>
                                        <Card className="Card_Restaurante tarjeta">
                                                <div className="tam_img">
                                                    <Card.Img variant="top" src={value.img} className="" />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title >{value.nombre}</Card.Title>
                                                    <Card.Text>
                                                     <p className="precio">Precio de envio:  {value.costo_envio}  | Tipo: {value.costo_envio}</p>   
                                                    {value.descripcion}
                                                    </Card.Text>
                                                    <Button variant="success" onClick={()=>alert("¡Estamos trabajando en ello!")} >ORDENAR AQUÍ</Button>
                                                </Card.Body>
                                            </Card>
                                    </Col>
                        })}
                    </Row>
                </section>
            </>
        );
      }
}
