// 键盘,水平移动,左右
// 跳跃为空给

cc.Class({
    extends: cc.Component,

    properties: {
       
    
    },

    // use this for initialization
    onLoad: function () {


        // 代码获取
        this.body = this.node.getComponent(cc.RigidBody);
        // end 
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.on_key_down.bind(this), this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.on_key_up.bind(this), this);

        this.input_flag = 0;
    },

    jump: function() {
        var v = this.body.linearVelocity;
        v.y = 600;
        this.body.linearVelocity = v;
    },

    // -1, 1
    walk: function(dir) {
        var v = this.body.linearVelocity;
        v.x = 300 * dir;
        this.body.linearVelocity = v;
        this.node.scaleX = dir;
    },

    on_key_down: function(e) {
        switch(e.keyCode) {
            case cc.KEY.left:
                this.input_flag = -1;
            break;
            case cc.KEY.right:
                this.input_flag = 1;
            break;
            case cc.KEY.space:
                this.jump();
            break;
        }
    },

    on_key_up: function(e) {
        switch(e.keyCode) {
            case cc.KEY.left:
                this.input_flag = 0;
            break;
            case cc.KEY.right:
                this.input_flag = 0;
            break;
            case cc.KEY.space:
            break;
        }
    },  

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.input_flag !== 0) {
            this.walk(this.input_flag);
        }
    },
});
