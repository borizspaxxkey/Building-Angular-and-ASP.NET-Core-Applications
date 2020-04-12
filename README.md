dotnet new angular
dotnet run
configureServices: used to setup dependency injection with services
configure: used to setup middleware, router,

// Module or NameSpace is a virtual directory structure, doesnt matter how folder is laid out in filesystem

// Add service to startup.cs

PAT [Personla Access Token] 4f4658a02974e6c3c32c2a76da0c7c716b1f8b08

ng g c books -m app // generates book component inside the app module

// Creating form with formBuilder

1.  addBookForm: FormGroup;
2.  private fb: FormBuilder;
3.  this.addBookForm = this.fb.group({
    title: [null, Validators.required] // null means no initial value set in the form control
    })
4.  <form [formGroup]="addBookForm" (ngSubmit)="onSubmit()">
5.  formControlName => name defined in formGroup eg formControlName="title"
6.  import ReactiveFormsModule into appModule

// BootStrap
class="btn btn-default btn-sm" // type color size

//router
<a [routerLink]="['/books']" class="card-link">Back</a> // navigates the user to the specified route

1.  inject router service // constructor(private router: Router) { }
2.  this.router.navigate("['/book-update']")
3.  constructor( private route: ActivatedRoute) { } // import activatedRoute
4.  this.route.snapshot.params.id // to get values from the url, must match whats defined in the route in app module eg. { path: 'show-book/:id', component: ShowBookComponent }
5.
