import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, Input} from '@angular/core';
import { Product } from './product.model';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../assets/css/styles.css','../assets/css/bootstrap.min.css']
})

export class AppComponent
{
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


  widthImagen = 10;
  nombres: string[] = ['A', 'B', 'C', 'D', 'E'];
  nuevoNombre : string = "";


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
    console.log(this.objLibro);
    if(this.objLibro.name == "" || this.objLibro.description == "")
    {
      alert("Ingrese la información faltante...");
    }
    else
    {
      alert("Guardando info...");
    }
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
    this.objLibro.name = element.value;
    console.log(element.value);
  }

  public actualizarDescription(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibro.description = element.value;
    console.log(element.value);
  }

  public actualizarPrice(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.objLibro.price = Number(element.value);
    console.log(element.value);
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

    //JSONLibro:any = JSON.stringify(this.products, ['productId']);

    //console.log(this.products[1].price);

    //this.products.forEach(libro => console.log(libro));

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
  products: Product[] = [
  {
		"productId": 16,
		"name": "Dune.",
		"description": "Frank Herbert.",
		"price": 29000,
		"categoryId": 1,
		"active": true,
    "image": "../assets/Books/16.jpeg",
		"category": {
			"categoryId": 1,
			"category": "Sci-fi",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Juego de tronos, La biblia"
    }
	},
  {
		"productId": 17,
		"name": "Matar a un ruiseñor.",
		"description": "Harper Lee.",
		"price": 17000,
		"categoryId": 1,
		"active": true,
    "image": "../assets/Books/17.jpeg",
		"category": {
			"categoryId": 1,
			"category": "Novela, Historia Real",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
  {
		"productId": 8,
		"name": "El guardian entre el centeno.",
		"description": "J.D. Salinger",
		"price": 17500,
		"categoryId": 2,
		"active": true,
    "image": "../assets/Books/8.jpeg",
		"category": {
			"categoryId": 2,
			"category": "Novela, Historia Real, Clasico Americano",
			"active": true
		}
    ,
    "swap": {
      "money": 29000,
      "books": "1984"
    }
	},
  {
		"productId": 5,
		"name": "Llamame por tu nombre.",
		"description": "André Aciman.",
		"price": 11000,
		"categoryId": 2,
		"active": true,
    "image": "../assets/Books/5.jpeg",
		"category": {
			"categoryId": 2,
			"category": "Novela, Drama",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "El principito, Dune, Cronicas marcianas"
    }
	},
	{
		"productId": 12,
		"name": "Verano pródigo.",
		"description": "Barbara Kingsolver",
		"price": 26000,
		"categoryId": 1,
		"active": true,
    "image": "../assets/Books/12.jpeg",
		"category": {
			"categoryId": 1,
			"category": "Novela larga",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
  {
		"productId": 9,
		"name": "La venus de las pieles.",
		"description": "L. Sacher Masoch.",
		"price": 22000,
		"categoryId": 3,
		"active": true,
    "image": "../assets/Books/9.jpeg",
		"category": {
			"categoryId": 3,
			"category": "Novela, Literatura erótica",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Lagrimas de angeles"
    }
	},
	{
		"productId": 13,
		"name": "Las ventajas de ser invisible.",
		"description": "Stephen Chbosky.",
		"price": 35000,
		"categoryId": 1,
		"active": true,
    "image": "../assets/Books/13.jpeg",
		"category": {
			"categoryId": 1,
			"category": "Novela juvenil, novela de aprendizaje",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
  },
  {
		"productId": 2,
		"name": "1984",
		"description": "George Orwell",
		"price": 15000,
		"categoryId": 2,
		"active": true,
    "image": "../assets/Books/2.jpeg",
		"category": {
			"categoryId": 2,
			"category": "Sci-fi, Novela distopica",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "El marciano"
    }
	},
  {
		"productId": 14,
		"name": "El principito.",
		"description": "Antoine De Saint-Exepéry",
		"price": 30000,
		"categoryId": 2,
		"active": true,
    "image": "../assets/Books/14.jpeg",
		"category": {
			"categoryId": 2,
			"category": "Fábula, Fantasía, Literatura infantil",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cosmos, Matar a un ruiseñor"
    }
	},
	{
		"productId": 6,
		"name": "Contrato con Dios.",
		"description": "Juan Gomez-Jurado.",
		"price": 15000,
		"categoryId": 1,
		"active": true,
    "image": "../assets/Books/6.jpeg",
		"category": {
			"categoryId": 1,
			"category": "Fantasía ",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
	{
		"productId": 7,
		"name": "El marciano.",
		"description": "Andy Weir.",
		"price": 10000,
		"categoryId": 1,
		"active": true,
    "image": "../assets/Books/7.jpeg",
		"category": {
			"categoryId": 1,
			"category": "Sci-fi, Suspenso",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
	{
		"productId": 4,
		"name": "El club de las 5 de la mañana.",
		"description": "Robin Sharma.",
		"price": 18000,
		"categoryId": 3,
		"active": true,
    "image": "../assets/Books/4.jpeg",
		"category": {
			"categoryId": 3,
			"category": "Autoayuda, Buenos habitos",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
	{
		"productId": 15,
		"name": "Los mitos de Cthulhu",
		"description": "H.P. Lovecraft.",
		"price": 19500,
		"categoryId": 3,
		"active": true,
    "image": "../assets/Books/15.jpeg",
		"category": {
			"categoryId": 3,
			"category": "Fantasía, Sci-fi",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
  {
		"productId": 1,
		"name": "¡Que viva la musica!",
		"description": "Andrés Caicedo.",
		"price": 10000,
		"categoryId": 1,
		"active": true,
    "image": "../assets/Books/1.jpeg",
		"category": {
			"categoryId": 1,
			"category": "Novela, Colombiana",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
	{
		"productId": 10,
		"name": "Peter Pan",
		"description": "J.M. Barrie",
		"price": 25000,
		"categoryId": 3,
		"active": true,
    "image": "../assets/Books/10.jpeg",
		"category": {
			"categoryId": 3,
			"category": "Fantasía, Novela infantil",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
	{
		"productId": 11,
		"name": "Sol de media noche",
		"description": "Stephenie Meyer",
		"price": 19000,
		"categoryId": 2,
		"active": true,
    "image": "../assets/Books/11.jpeg",
		"category": {
			"categoryId": 2,
			"category": "Fantasia, Novela vampirica",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
	{
		"productId": 3,
		"name": "Historia universal de la infamia.",
		"description": "Jorge Luis Borges.",
		"price": 15000,
		"categoryId": 3,
		"active": true,
    "image": "../assets/Books/3.jpeg",
		"category": {
			"categoryId": 3,
			"category": "Novela, Terror",
			"active": true
		},
    "swap": {
      "money": 29000,
      "books": "Cazador Haku, Dune, Cosmos"
    }
	},
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
}

