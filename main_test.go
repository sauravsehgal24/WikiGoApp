package main

import(
	"testing"
	"bytes"
	"encoding/json"
	"github.com/stretchr/testify/assert"
	"net/http"
	"net/http/httptest"
	"github.com/gorilla/mux"
)

// Initialize router for tests
func Router() *mux.Router{
	router := mux.NewRouter()
	router.HandleFunc("/api/articles", getArticles).Methods("GET")
	router.HandleFunc("/api/articles/{name}", getSpecificArticle).Methods("GET")
	router.HandleFunc("/api/articles/{name}", updateArticles).Methods("PUT")
	return router
}

// Execute new request for every implementation
func executeNewRequest(request *http.Request) *httptest.ResponseRecorder {
	response := httptest.NewRecorder()
    Router().ServeHTTP(response,request)
    return response
}


// TEST handler: getArticles, route: /api/articles 
func TestGetAllArticles(t *testing.T){
	tt := []struct{
		url string
		bodyLength int
		expectation int
		message string
	}{
		{"/api/articles",7,200,"Expecting OK"},
		{"/api/asdarticles",0,404, "Expecting Not Found"},
		{"/articles",0, 404, "Expecting Not Found"},
	}

	for _, tc := range tt {
		request , _ := http.NewRequest("GET", tc.url , nil) 
		response := executeNewRequest(request)
		var articles Articles
		_ = json.NewDecoder(response.Body).Decode(&articles)
		assert.Equal(t,tc.expectation,response.Code,tc.message)
		assert.Equal(t,tc.bodyLength,len(articles),tc.message)
	}

}

// TEST handler: getSpecificArticles, route: /api/articles/{name} 
func TestGetArticleByName(t *testing.T){
	tt := []struct{
		url string
		expectation int
		message string
	}{
		{"/api/articles/New Year",200,"Expecting OK"},
		{"/api/jam",404, "Expecting Not Found"},
		{"/articles/fdfads",404, "Expecting Not Found"},
	}

	for _, tc := range tt {
		request , _ := http.NewRequest("GET",tc.url, nil) 
		response := executeNewRequest(request)
		assert.Equal(t,tc.expectation,response.Code,tc.message)
	}

	
}

// TEST handler: updateArticles, route: /api/articles/{name} 
func TestUpdateArticle(t *testing.T){

	tt := []struct{
		url string
		expectation int
		message string
	}{
		{"/api/articles/New Year",200,"Expecting Updated OK"},
		{"/api/articles/What is What",201, "Expecting Created"},
		{"/articles/fdfads",404, "Expecting Not Found"},
	}
	for _, tc := range tt {
		reqBody, _ := json.Marshal(map[string]string{
			"name":"jam",
			"author":"test",
			"genere":"Generedas",
		}) 
	   request , _ := http.NewRequest("PUT", tc.url, bytes.NewBuffer(reqBody)) 
	   response := executeNewRequest(request)
	   assert.Equal(t,tc.expectation,response.Code,tc.message)
	}
	 
}