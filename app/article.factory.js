(function() {

    let app= angular.module ('ngblog');
    app.factory('ArticleFactory',function(){
        let af = {
            id:0,
            create:(title,descr)=> {
                return {
                    id: af.id,
                    title: title||'Article n°' + af.id++,
                    description: descr|| 'blablablablablablabalbalbalbal',
                }
            }  ,
            clone: (article)=> {
                let clone= {};
                clone.id=article.id;
                clone.title=article.title;
                clone.description=article.description;
                return clone;
            }
        };
        return af;

    });
})();