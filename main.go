package main

import(
	"encoding/json"
	"log"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/gorilla/handlers"
)

// Model --------------------------------------------------------------------------------------------
type Article struct {
	Name string `json:"name"`
	Author string `json:"author"`
	Genere string `json:"genere"`
}
type Articles []Article

//Global Variable
var articles Articles = Articles{
	Article{Name:"New Year", Author:"John", Genere:"Social"},
	Article{Name:"Who is who", Author:"Saurav", Genere:"Social"},
	Article{Name:"Build full-stack app", Author:"Shaun", Genere:"Tech"},
	Article{Name:"Comedy Time", Author:"Russel peters", Genere:"Comedy"},
	Article{Name:"Time Machine", Author:"Nolan", Genere:"Sci-Fi"},
	Article{Name:"Old Days", Author:"saurav", Genere:"Social"},
	Article{Name:"Music Top Hits 2019", Author:"Billboard", Genere:"Music"},
}

// -------------------------------------------------------------------------------------------------


// Helper method to see if the article exists with particular name ---------------------------------
// Return: founded article and its index
func h_getArticleWithName(articleNameFromParam string) (foundedArticle Article, place int) {
	foundArticle := Article{}
	count := 0
	for i := 0; i < len(articles); i++ {
		if(articles[i].Name == articleNameFromParam){
			foundArticle = articles[i]
			count = i
		}
	}
	return foundArticle,count
}
// ------------------------------------------------------------------------------------------------

// Enable CORS ------------------------------------------------------------------------------------
func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
// ------------------------------------------------------------------------------------------------

// Endpoint request handlers -----------------------------------------------------------------------

// Get all articles
func getArticles(w http.ResponseWriter, r *http.Request){

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(articles)
}

// Get specific article 
// If found then return it else return error status
func getSpecificArticle(w http.ResponseWriter, r *http.Request){
	params := mux.Vars(r)
	foundedArticle,_ := h_getArticleWithName(params["name"])
	//return the founded article in response and if its empty then return error status and message 
	if(foundedArticle != Article{}){
		json.NewEncoder(w).Encode(foundedArticle)
	} else {
		http.Error(w, "Not Found", 404)
	}
	 
}

// Update the article
// If already exists then update otherwise append it in the array
func updateArticles(w http.ResponseWriter, r *http.Request){
	enableCors(&w)
	params := mux.Vars(r)
	var article Article 
	_ = json.NewDecoder(r.Body).Decode(&article)
	foundedArticle,place := h_getArticleWithName(params["name"])

	if(foundedArticle == Article{}){
		articles = append(articles, article)
		w.WriteHeader(http.StatusCreated)
	} else {
		articles[place] = article
		w.WriteHeader(http.StatusOK)
	}
}

// ------------------------------------------------------------------------------------------


// Main ---------------------------------------------------------------------------------------
func main(){

	// init router
	r := mux.NewRouter()

	// route api endpoints
	r.HandleFunc("/api/articles", getArticles).Methods("GET")
	r.HandleFunc("/api/articles/{name}", getSpecificArticle).Methods("GET")
	r.HandleFunc("/api/articles/{name}", updateArticles).Methods("PUT")

	// serve client UI at '/' route
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./client/build/")))

	// server running
	port := "3000" 
	log.Fatal(http.ListenAndServe(":"+port, handlers.CORS()(r)))

}

// --------------------------------------------------------------------------------------------


