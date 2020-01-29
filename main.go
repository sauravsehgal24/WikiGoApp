package main

import(
	"encoding/json"
	"log"
	"net/http"
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
	Article{Name:"rest_api", Author:"saurav", Genere:"Tech"},
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
	enableCors(&w)
	switch r.Method {
	case "GET":
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(articles)
	default:
		http.Error(w, "Not Found", 404)
	}
}

// Get specific article 
// If found then return it else return error status
func manipulateSpecificArticle(w http.ResponseWriter, r *http.Request){
	enableCors(&w)
	param := r.URL.Query()["name"][0]

	switch r.Method {
	case "GET":
		
		foundedArticle,_ := h_getArticleWithName(param)

		if(foundedArticle != Article{}){
			//return the founded article in response and if its empty then return error status and message 
			json.NewEncoder(w).Encode(foundedArticle)
		} else {
			http.Error(w, "Not Found", 404)
		}

	// Update the article
	// If already exists then update otherwise append it in the array
	case "PUT":
		var article Article 
		_ = json.NewDecoder(r.Body).Decode(&article)
		foundedArticle,place := h_getArticleWithName(param)

		if(foundedArticle == Article{}){
			articles = append(articles, article)
			w.WriteHeader(http.StatusCreated)
		} else {
			articles[place] = article
			w.WriteHeader(http.StatusOK)
		}

	default:
		http.Error(w, "Not Found", 404)
	}
}

// ------------------------------------------------------------------------------------------


// Main ---------------------------------------------------------------------------------------
func main(){

	// init router
	mux := http.NewServeMux()	
	// route api endpoints
	mux.HandleFunc("/api/articles", getArticles)
	mux.HandleFunc("/api/articles/", manipulateSpecificArticle)

	// serve client UI at '/' route 
	mux.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("./client/build/"))))
	// server running
	port := "8080" 
	log.Fatal(http.ListenAndServe(":"+port, mux))

}

// --------------------------------------------------------------------------------------------


