cc.Class({
    extends: cc.Component,

    properties: {
      
        target: {
            default: null,
            type: cc.Node,
        },
    },

   
    onLoad: function () {

    },

 
    update: function (dt) {
        if (this.target === null) {
            return;
        }
        // target到哪里, camera跟到哪里
        var wpos = this.target.convertToWorldSpaceAR(cc.p(0, 0));
        var pos = this.node.parent.convertToNodeSpaceAR(wpos);
       
        this.node.x = pos.x;
    },
});
