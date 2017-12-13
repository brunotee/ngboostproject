(function(){
let appModule= angular.module('ngblog');
    
appModule.controller('BlogController',
                     function ($scope,ArticleService,ArticleFactory)
                    {
                    this.listVisible=false;
                    this.formVisible=false;
                    this.article={};
                    this.ArticlEService.mock(5);
                    this.articles=ArticleS.service.list();
                    this.displayArticleForm=(show)=>{
                        
                      this.displayArticleForm=(show)=> {
            
                        this.listVisible =!show;
                        this.formVisible = show;
                        if (!show) {this.article= {};
                       }      
                        
                    };
                        
       
                    }
        this.validateArticleForm=(e)=>{
            this.articles.push(ArticleFactory.create(this.newArticle.title,
                                                     this.newArticle.description));
            this.displayArticleForm(false);
            
            
        }
        this.editArticle=(article)=>{
            this.editArticle=ArticleFactory.clone(article);
            this.displayArticleForm('true');
            
            
            
            
            
        };
        
      this.deleteArticle=(articleId)=>{
          
          for (var i=0; i< this.articles.length; i++)
              {
                if (this.articles[i].id===articleId)
                    {
                        index = i;
                        break;
                        
                    }
                  
              }
          if (index >=0)  {
              this.articles.splice (index,1);
              
          }else {
              console.error("ne pas trouvé pour suppression"+ '%s',articleId);
          };
           
            
        }
    
                    $scope.$on('loggedIn',()=>{
                        
                        this.listVisible=true;
                        
                        
                        
                        
                    });
    
});
})();