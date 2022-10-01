import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld.vue";
import MyHoteles from '../components/MyHoteles.vue';
import TipoHabitaciones from '../components/TiposHabitaciones.vue';
import TipoAcomodaciones from '../components/TipoAcomodaciones.vue';
import DetalleHotel from '../components/DetalleHotel.vue';
import CrearHotel from '../components/CrearHotel.vue';
import HabitacionesHotel from '../components/HabitacionesHotel.vue';
import EditarHabitacion from '../components/EditarHabitacion.vue';
import CrearHabitacion from '../components/CrearHabitacion.vue';

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'HelloWorld',
    component: HelloWorld
  },
  {
    path:'/hoteles',
    name:'Hoteles',
    component: MyHoteles
  },
  {
    path:'/habitacionesTipo',
    name:'Tipo_Habitaciones',
    component: TipoHabitaciones
  },
  {
    path:'/acomodaciones',
    name:'Tipo_Acomodaciones',
    component: TipoAcomodaciones
  },
  {
    path:'/detallehotel/:id',
    name:'Detalle_Hotel',
    component: DetalleHotel
  },
  {
    path:'/crearhotel',
    name:'Crear_Hotel',
    component: CrearHotel
  },
  {
    path:'/habitacioneshotel/:id',
    name:'Habitaciones_Hotel',
    component: HabitacionesHotel
  },
  {
    path:'/editarhabitacion/:id',
    name:'Editar_Habitacion',
    component: EditarHabitacion
  },
  {
    path:'/crearhabitacion/:id',
    name:'Crear_Habitacion',
    component: CrearHabitacion
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
