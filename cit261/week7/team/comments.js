class CommentModel{

    constructor(type) {
        this.type = type;

        this.comments = readFromLS(this.type || [];)
    }

    getAllComments(q = null){
        if (q === null){}
        
        return this.comments;
    }
    renderCommentsList(){
        array.forEach(element => {

        });

    }
    filterCommentsByName(){
        return this.comments().filter(el => el.name === hikeName )
    }

    addComments(hikeName, comment){
        const newComment = {
            name: hikeName,
            date: new Date(),
            content: comment
        };
        this.commentArray.push(newComment);
    }

}