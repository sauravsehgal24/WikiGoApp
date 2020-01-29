package main

import(
	"testing"
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
)

// Initialize router for tests
func HttpRouter() http.Handler{
	mux := http.NewServeMux()
	mux.HandleFunc("/api/articles", getArticles)
	mux.HandleFunc("/api/articles/", manipulateSpecificArticle)
	return mux
}

// Execute new request for every implementation
func executeNewRequest(request *http.Request) *httptest.ResponseRecorder {
	response := httptest.NewRecorder()
    HttpRouter().ServeHTTP(response,request)
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
		{"/api/articles",8,200,"Expecting OK"},
		{"/api/asdarticles",0,404, "Expecting Not Found"},
		{"/articles",0, 404, "Expecting Not Found"},
	}

	for _, tc := range tt {
		request , _ := http.NewRequest("GET", tc.url , nil) 
		response := executeNewRequest(request)
		var articles Articles
		_ = json.NewDecoder(response.Body).Decode(&articles)

		if(tc.expectation != response.Code || tc.bodyLength != len(articles)){
			t.Errorf(tc.message)
		}
	}

}

// TEST handler: getSpecificArticles, route: /api/articles/{name} 
func TestGetArticleByName(t *testing.T){
	tt := []struct{
		url string
		expectation int
		message string
	}{
		{"/api/articles/?name=New Year",200,"Expecting OK"},
		{"/api/?name=jam",404, "Expecting Not Found"},
		{"/articles/fdfads",404, "Expecting Not Found"},
	}

	for _, tc := range tt {
		request , _ := http.NewRequest("GET",tc.url, nil) 
		response := executeNewRequest(request)
		if(tc.expectation != response.Code){
			t.Errorf(tc.message)
		}
	}

	
}

// TEST handler: updateArticles, route: /api/articles/{name} 
func TestUpdateArticle(t *testing.T){

	tt := []struct{
		url string
		expectation int
		message string
	}{
		{"/api/articles/?name=New Year",200,"Expecting Updated OK"},
		{"/api/articles/?name=What is What",201, "Expecting Created"},
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
	   if(tc.expectation != response.Code){
		t.Errorf(tc.message)
	}
	}
	 
}