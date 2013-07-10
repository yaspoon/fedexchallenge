function events()
{

    var newEvents = new Array();
    var currentEvents = new Array();

    this.handleEvents = handleEvents
    function handleEvents()
    {
    }

    this.queueEvent = queueEvent
    function queueEvent(inEvent)
    {
        newEvents.splice(newEvents.length,0, inEvent);
    }

    this.processEventQueue = processEventQueue
    function processEventQueue()
    {
        for(var i = 0; i < newEvents.length; i++)
        {
            currentEvents.splice(currentEvents.length,0,newEvents[i]);
        }

        newEvents = [];
    }
}
