var scriptName = "combo666";
var scriptAuthor = "zxczenos138";
var scriptVersion = 1.0;

function combo666() {
    var amount = value.IntegerValue("Packets", 166, 0, 666)
    var delay = value.createFloat("Delay", 66, 0, 666)
    var hurttime = value.createInteger("CustomHurtTime", 66, 0, 77)
    var motionyValue = createFloat("MotionY", 0.13, 0, 6.66)
    var particles = value.createBoolean("SpawnParticlesOnAttack", true)
    this.getName = function() {
        return "combo666";
    }

    this.getCategory = function() {
        return "Combat";   
    }

    this.getDescription = function() {
        return "Counts hits and then criticals.";
    }
	  this.onEnable = function() {
		    mc.thePlayer.jump()
		
	  }

    this.onAttack = function() {
        var target = event.getTargetEntity()
        if(mc.thePlayer.onGround) {
		}
    }
	this.onDisable = function() {
		value = 0;
	}
}

    this.addValues = function(values) {
        values.add(amount)
        values.add(delay)
        values.add(hurttime)
        values.add(motiony)
        values.add(particles)
    }
}

var combo666 = new combo666();

function onLoad() {}

function onEnable() {
    moduleManager.registerModule(combo666);
};

function onDisable() {
    moduleManager.unregisterModule(combo666);
};
