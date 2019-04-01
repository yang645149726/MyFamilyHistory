var Skill = require("Skill"),
    ZhaoShi = require("ZhaoShi"),
    Actor = cc.Class({
        extends: cc.Component,
        /*
        1.Hp生命值：1-999。降至0，人物死亡。战斗中不能吃药，平时可以靠吃补品和药物恢复Hp。
        2.内力：0-99。作用是通过临时增加攻或防来提升招式的威力。不附带内力发出的招式是很弱的。平时打坐、吃补品可以恢复内力。
        3.攻：1-99。使用武器可以增加基础攻击力。
        4.防：1-99。穿戴防具可以增加基础防御力。
        5.怒气：0-10。数值默认为0，会根据剧情变化。战斗中每累计受到 Hp*0.1（该系数待设定）的伤害时会提升1点，会因为使用某些招式而增加或消耗。
        6.等级：对人物总体战斗力的评估。等于 (atk+def+(Hp+10*Mp)/T)*0.25
                //等于人物所修功法等级之和。初始等级是1级。由于功法最多有11个，所以最大等级为99。
        7.功法：人物所修炼的内功与招式。初始只有一个1级的招式“咏春拳”（初始剧情）。
                游戏中最多再学习1内功、9招式。内功可以被“废掉”（这时人物等级会下降），以重学其他内功。
        */
        properties: {
            hpMax: 10,
            hp:10,
            mpMax: 0,
            mp:0,
            atk: 1,
            def: 1,
            nu: 0,
            lv: 0,
            skill: [Skill],
        },

        onLoad() { },

    });
