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
5.  this.service.updateBook(this.updateBookForm.value); // to get the value from the reactive form
6.  formControlName => name defined in formGroup eg formControlName="title"
7.  import ReactiveFormsModule into appModule

// BootStrap
class="btn btn-default btn-sm" // type color size

//router
<a [routerLink]="['/books']" class="card-link">Back</a> // navigates the user to the specified route

1.  inject router service // constructor(private router: Router) { } to navigate to a different component
2.  this.router.navigate("['/book-update']")
3.  constructor( private route: ActivatedRoute) { } // import activatedRoute
4.  this.route.snapshot.params.id // to get values from the url, must match whats defined in the route in app module eg. { path: 'show-book/:id', component: ShowBookComponent }

// Updating Existing Data

1.  Create Service Method
2.  Create View
3.  Create FormGroup
4.  Inject Service
5.  Handle Response

// Getting a Single Book [Book Details]

1.  Create Service Method
2.  inject Service
3.  Handle result

// Adding new data from Angular

1.  Create method in Angular Service
2.  Inject Service in component
3.  call method from Angular service
4.  handle the response

// Book Controller
Wrap request in try catch , send Ok 200 in good request. Send Bad 500 in error request
try
{
if(book != null){
service.AddBook(book);
return Ok(book);
}
return BadRequest("Book was not added");
}
catch (Exception ex)
{
return BadRequest(ex.Message);
}
