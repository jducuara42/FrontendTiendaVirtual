import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, Input} from '@angular/core';
import { Product } from './product.model';
import { setTheme } from 'ngx-bootstrap/utils';
import { RestService } from './rest.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../assets/css/styles.css','../assets/css/bootstrap.min.css']
})

export class AppComponent
{
  //ENDPOINT_BACKEND = "http://54.236.237.62/tienda-virtual/api/products";
  ENDPOINT_BACKEND = "http://localhost:8090/tienda-virtual/api/products";

  constructor(private RestService:RestService)
  {

  }

  displayStyle = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  libroID = 0;

  objLibro = {
    productId: 0,
    name: '',
    description: '',
    price: 0,
    categoryId: 0,
    categoryName: '',
    active: false,
    image: '',
    swap: '',
  }

  objLibroInsert = {
    name: '',
    description: '',
    price: 0,
    categoryId: 1,
    active: true,
    image: '../assets/images/default.png',
  }

  widthImagen = 10;
  nombres: string[] = ['A', 'B', 'C', 'D', 'E'];
  nuevoNombre : string = "";

  products: Product[] = [];
  urlUpdate : string = "";

  title = 'tiendaLibros';
  edad = 18;
  name = 'Jehison';
  imagen = 'https://i1.sndcdn.com/avatars-000434742474-znsup5-t500x500.jpg';
  btnDisable = true;

  objRegistroUsuario = {
    nombre: '',
    correo: '',
    contrasena: '',
  }

  objPersona = {
    edad: 29,
    nombre: 'Jehison D',
    avatar: 'https://i1.sndcdn.com/avatars-000434742474-znsup5-t500x500.jpg'
  }

  ngOnInit(): void{
    this.cargarData();
  }

  public cargarData()
  {
    this.RestService.get(this.ENDPOINT_BACKEND + "/all").subscribe(response => {
      console.log(response);
      //alert(response);
      this.products = response as Product[];
    })
  }

  public closePopupCreated()
  {
    this.displayStyle3 = "none";
    this.objLibro.name = "";
    this.objLibro.description = "";
    this.objLibro.price = 0;
    this.objLibro.swap = "";
  }

  public crearLibro()
  {
    this.displayStyle3 = "block";
    //alert("crear");
  }

  public editarLibro()
  {
    this.displayStyle2 = "block";
    //alert("editar");
  }

  public guardarInfoLibro()
  {
    console.log(this.objLibroInsert);

    if(this.objLibroInsert.name == "" || this.objLibroInsert.description == "")
    {
      //alert("Ingrese la información faltante...");
      Swal.fire({
        title: 'Advertencia!',
        text: 'Ingrese la información faltante...',
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }
    else
    {
      this.RestService.post(this.ENDPOINT_BACKEND + "/save", this.objLibroInsert).subscribe(
        response => {
          //alert("Guardando info: " + response + " ...");
          //alert("Se guardo la información.");
          Swal.fire({
            title: 'Guardado!',
            text: 'Se guardo la información del libro',
            icon: 'success',
            confirmButtonText: 'Cerrar'
          });
          this.limpiarCamposCrearLibro();
          this.cargarData();
        },
        (error: HttpErrorResponse) => {
          //alert("Error, no se pudo guardar la información");
          Swal.fire({
            title: 'Error!',
            text: 'No se pudo guardar la información',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      );
    }
  }

  public actualizarInfoLibro()
  {
    console.log(this.objLibro);
    if(this.objLibro.name == "" || this.objLibro.description == "" || this.objLibro.productId == 0)
    {
      //alert("Ingrese la información faltante...");
      Swal.fire({
        title: 'Advertencia!',
        text: 'Ingrese la información faltante...',
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }
    else
    {
      this.urlUpdate = this.ENDPOINT_BACKEND + "/update/" + this.objLibro.productId;

      console.log("this.urlUpdate: " + this.urlUpdate);

      this.RestService.put(this.urlUpdate, this.objLibro).subscribe(response => {
        Swal.fire({
          title: 'Actualizado!',
          text: 'Se modifico la información del libro',
          icon: 'success',
          confirmButtonText: 'Cerrar'
        });
      });
    }
  }

  public limpiarCamposCrearLibro()
  {
    this.objLibroInsert.name = "";
    this.objLibroInsert.description = "";
    this.objLibroInsert.price = 0;
    this.objLibroInsert.categoryId = 1;
    this.objLibroInsert.active = true;
    this.objLibroInsert.image = '../assets/images/default.png';
  }

  public buscarLibro(event: Event)
  {
    const element = event.target as HTMLInputElement;

    if(element.value != "")
    {
      alert("Buscando: " + element.value);
    }
  }

  public actualizarName(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibroInsert.name = element.value;
    console.log("Insert: " + element.value);
  }

  public actualizarNameUpdate(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibro.name = element.value;
    console.log("Update: " + element.value);
  }

  public actualizarDescription(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibroInsert.description = element.value;
    console.log("Insert: " + element.value);
  }

  public actualizarDescriptionUpdate(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibro.description = element.value;
    console.log("Update: " + element.value);
  }

  public actualizarPrice(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibroInsert.price = Number(element.value);
    console.log("Insert: " + element.value);
  }

  public actualizarPriceUpdate(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibroInsert.price = Number(element.value);
    console.log("Update: " + element.value);
  }

  public actualizarCategory(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibroInsert.categoryId = Number(element.value);
    console.log("Insert: " + element.value);
  }

  public actualizarCategoryUpdate(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibro.categoryId = Number(element.value);
    console.log("Update: " + element.value);
  }

  public actualizarSwap(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibro.swap = element.value;
    console.log(element.value);
  }

  public closePopupEdit()
  {
    this.displayStyle2 = "none";
  }

  public precargarLibro(libroSeleccionado:number)
  {
    console.log("libro: " + libroSeleccionado);
    let productId: number = 0;
    let name: string = '';
    let description: string = '';
    let price: number = 0;
    let categoryId: number = 0;
    let active: boolean = true;
    let image: string = '';
    let categoryName: string = '';
    let Swap: string = '';

    this.products.forEach(function(libro)
    {
      if(libro.productId == libroSeleccionado)
      {
        //console.log(libro.category?.category);
        productId = libro.productId;
        name = libro.name;
        description = libro.description;
        price = libro.price;
        categoryId = libro.categoryId;
        active = libro.active;
        image = libro.image;
        categoryName = String(libro.category?.category);
        Swap = String(libro.swap?.books);
      }
    });

    this.objLibro.productId = productId;
    this.objLibro.name = name;
    this.objLibro.description = description;
    this.objLibro.price = price;
    this.objLibro.categoryId = categoryId;
    this.objLibro.active = active;
    this.objLibro.image = image;
    this.objLibro.categoryName = categoryName;
    this.objLibro.swap = Swap;
  }

  public openPopup(libro:number)
  {
    this.precargarLibro(libro);
    this.displayStyle = "block";
  }

  public closePopup()
  {
    this.displayStyle = "none";
  }

  public eliminarLibro(libro:any)
  {
    //alert("eliminar: " + libro);
    this.urlUpdate = this.ENDPOINT_BACKEND + "/delete/" + libro;

    console.log("this.urlUpdate: " + this.urlUpdate);

    Swal.fire({
      title: 'Esta seguro?',
      text: "Usted no podra revertir este cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed)
      {
        this.RestService.delete(this.urlUpdate).subscribe(response => {
          console.log("response: " + response);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          this.closePopup();
          this.cargarData();
        });
      }
    })
  }

  public intercambiarLibro()
  {
    alert("Iniciar intercambio");
  }

  public toogleButton()
  {
    this.btnDisable = !this.btnDisable;
  }

  public aumentarEdad()
  {
    this.objPersona.edad += 1;
  }

  public verificarScroll(event: Event)
  {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  public teclaTecleada(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objPersona.nombre = element.value;
    console.log(element.value);
  }

  public agregarNombre()
  {
    this.nombres.push(this.nuevoNombre);
    this.nuevoNombre = "";
  }

  public eliminarNombre(index: number)
  {
    this.nombres.splice(index, 1);
    this.nuevoNombre = "";
  }

  public registrarUsuario()
  {
    console.log(this.objRegistroUsuario);
  }

  box = {
    width: 100,
    height: 250,
    background: 'blue'
  };

  //LIBROS:
  /*
  products: Product[] = [
	{
		"productId": 20,
		"name": "Libro de prueba 2",
		"description": "Libro de prueba ABC",
		"price": 20000,
		"categoryId": 3,
		"active": true,
    "image": "../assets/images/default.png",
		"category": {
			"categoryId": 3,
			"category": "Fantasia",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	}
];
*/
}

