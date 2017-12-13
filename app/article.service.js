// app
(function(){

let  appModule=angular.module('ngblog');

appModule.provider('ArticleService',function ArticleServiceProvider(){
 
    this.$get=[function ArticleServiceFactory() {
        
        let as={
     
            this.articles = [],
                    list:()=>as.articles, 
                    create: (title,description)=> {
                        as.articles.push(
                            ArticleFactory.create(title,description));
                        },
                    update:(updateArticle)=> {
                        
                      let index=as.articles
                            .findIndex((article.id)=>article.id === updateArticle.id);
                        as.articles.splice(index,1,updateArticle);
                           
                    },
                    delete:(updateArticle)=> {
                        
                     let index=as.articles.findIndex((article.id)=>article.id === ArticleId);
                        as.articles.splice(indx,1);
                    }
                    
                };
            if (this.debug) {
                a.mock=(count) => {
                    while(count>=0){
                       as.articles.push(ArticlesFactory.create()) ;
                        --count;                       
                        
                        }
                    };
                }
            return as;
            }
        ];
    
    });
    app.config(function(ArticleServiceProvider) {
                    ArticlesServiceProvider.activateDebug();
     }
                           

})();
