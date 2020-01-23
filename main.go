package main

import(
	"encoding/json"
	"log"
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

//Model --------------------------------------------------------------------------------------------
type Article struct {
	Name string `json:"name"`
	Author string `json:"author"`
}
type Articles []Article

//Global Variable
var articles Articles

// -------------------------------------------------------------------------------------------------


//Helper method to see if the article exists with particular name ---------------------------------
//Return: founded article and its index
func _getArticleWithName(articleNameFromParam string) (foundedArticle Article, place int) {

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


//Endpoint request handlers -----------------------------------------------------------------------

//Get all articles
func getArticles(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(articles)
	
}

//Get specific article 
//If found the return it else error status
func getSpecificArticle(w http.ResponseWriter, r *http.Request){
	params := mux.Vars(r)
	foundedArticle,place := _getArticleWithName(params["name"])
	fmt.Printf("%d\n",place)
	//return the founded article in response and if its empty then return error status and message 
	if(foundedArticle != Article{}){
		json.NewEncoder(w).Encode(foundedArticle)
	} else {
		http.Error(w, "Not Found", 404)
	}
	 
}

//Update the article
//If already exists then update otherwise append it in the array
func updateArticles(w http.ResponseWriter, r *http.Request){

	params := mux.Vars(r)
	var article Article 
	_ = json.NewDecoder(r.Body).Decode(&article)
	
	foundedArticle,place := _getArticleWithName(params["name"])

	if(foundedArticle == Article{}){
		articles = append(articles, article)
		json.NewEncoder(w).Encode(articles)
	} else {
		articles[place] = article
		json.NewEncoder(w).Encode(articles)
	}
	
	fmt.Printf("%s", params["name"]);

}

// ------------------------------------------------------------------------------------------


//Main ---------------------------------------------------------------------------------------
func main(){
	
	//dummy data initialization
	articles = Articles{
		Article{Name:"test1", Author:"jon1"},
		Article{Name:"test2", Author:"jon2"},
		Article{Name:"test3", Author:"jon3"},
	}

	//init router
	r := mux.NewRouter()

	//route api endpoints
	r.HandleFunc("/api/articles", getArticles).Methods("GET")
	r.HandleFunc("/api/articles/{name}", getSpecificArticle).Methods("GET")
	r.HandleFunc("/api/articles/{name}", updateArticles).Methods("PUT")

	//serve client UI at '/' route
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./client/build/")))

	//server running
	log.Fatal(http.ListenAndServe(":3002", r))

}

// --------------------------------------------------------------------------------------------


