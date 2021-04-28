//clase que representa los bloques de tiempo
class TimeBlock {
    constructor(initHour,next) {
        //únicamente contiene su hora de inicio
        this.initHour = initHour
        this.next=next;
        this.before=null;
    }
}

//clase que representa las rutina
class Routine {
    constructor(name, date, hours, next) {
        this.timeBlockHead;
        this.timeBlockTail;
        this.name = name;
        this.date = date;
        this.hours = hours;
        this.next = next;
        this.before=null;
    }

    createTimeBlock(initHour) {
        if(this.timeBlockHead==null) {
            let timeBlock = new TimeBlock(initHour, null);
            this.timeBlockHead = timeBlock;
            this.timeBlockTail = timeBlock;
        }else {
            let timeBlock = new TimeBlock(initHour, this.timeTail);
            this.timeBlockTail.before = timeBlock;
            this.timeBlockTail = timeBlock;
        }
    }

    deleteTimeBlock(name) {
        let temporary=this.timeBlockHead;
        while(this.timeBlockHead.before!==null){
            if(this.timeBlockHead.name==name){
                if(this.timeBlockHead===this.timeBlockTail){
                    this.timeBlockHead=null;
                    this.timeBlockTail=null;
                }else {
                    this.timeBlockHead.next.before=this.timeBlockHead.before;
                    this.timeBlockHead.before.next=this.timeBlockHead.next;
                    this.timeBlockHead=this.timeBlockHead.before;
                    this.timeBlockHead.next=null;
                    this.timeBlockHead.before=null;
                }
            this.timeBlockHead=this.timeBlockHead.before;
            }
        }
        this.timeBlockHead=temporary;
    }
}

class Objective {
    constructor(name, description, metodology, next) {
        this.routineHead;
        this.routineTail;
        this.name = name;
        this.description = description;
        this.metodology = metodology;
        this.next = next;
        this.before = null;
    }

    createRoutine(name, date, hours) {
        if(this.routineHead==null) {
            let routine = new Routine(name, date, hours, null);
            this.routineHead = routine;
            this.routineTail = routine;
        }else {
            let routine = new Routine(name, date, hours, routineTail);
            this.routineTail.before = routine;
            this.routineTail = routine;
        }
    }

    deleteRoutine(name) {
        let temporary=this.routineHead;
        while(this.routineHead.before!==null){
            if(this.routineHead.name==name){
                if(this.routineHead===this.routineTail){
                    this.routineHead=null;
                    this.routineTail=null;
                }else {
                    this.routineHead.next.before=this.routineHead.before;
                    this.routineHead.before.next=this.routineHead.next;
                    this.routineHead=this.routineHead.before;
                    this.routineHead.next=null;
                    this.routineHead.before=null;
                }
            this.routineHead=this.routineHead.before;
            }
        }
        this.routineHead=temporary;
    }
}

class User {
    constructor(username, password) {
        this.objectivesHead = null;
        this.objectivesTail = null;
        this.userName = username;
        this.password = password;
    }

    createObjective(name, description, metodology) {
        if(this.objectivesHead==null) {
            let objective = new Objective(name, description, metodology, null);
            this.objectivesHead = objective;
            this.objectivesTail = objective;
        }else {
            let objective = new Objective(name, description, metodology, objectivesTail);
            this.objectivesTail.before = objective;
            this.objectivesTail = objective;
        }
    }

    deleteObjective(name) {
        let temporary=this.objectivesHead;
        while(this.objectivesHead.before!==null){
            if(this.objectivesHead.name==name){
                if(this.objectivesHead===this.objectivesTail){
                    this.objectivesHead=null;
                    this.objectivesTail=null;
                }else {
                    this.objectivesHead.next.before=this.objectivesHead.before;
                    this.objectivesHead.before.next=this.objectivesHead.next;
                    this.objectivesHead=this.objectivesHead.before;
                    this.objectivesHead.next=null;
                    this.objectivesHead.before=null;
                }
            this.objectivesHead=this.objectivesHead.before;
            }
        }
        this.objectivesHead=temporary;
    }
}

class metodology{
    constructor(){

    }
}