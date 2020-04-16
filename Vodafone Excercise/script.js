console.log("Connected!");

function getProcessingPage(data) {

    //if state == "processing" -> wait 2 seconds and then fetch the next state
    var promise = new Promise((resolve, reject) => {
        var process = function(array) {
            var op = array.shift();
            console.log('Operation: ', op);
            if(op.state == 'processing') {
                setTimeout(() => process(array), 2000);
            } else {
                resolve(op);
            }
        }
        process(data);
    });

    //handling of statuses
    promise.then((data) => {
        try {
            if (data.state == "success") throw "success";
            if (data.errorCode == "NO_STOCK") throw "NO_STOCK";
            if (data.errorCode == "INCORRECT_DETAILS") throw "INCORRECT_DETAILS";
            if (data.errorCode == "null") throw "null";
            if (data.errorCode == "undefined") throw "undefined";
            if (data.state == "error") throw "error";
        } catch (msg) {
            switch (msg){
                case "success": 
                return console.log({ title: 'Order complete', message: null })
                break;
                case "NO_STOCK": 
                return console.log({ title: 'Error page', message: 'No stock has been found' })
                break;
                case "INCORRECT_DETAILS": 
                return console.log({ title: 'Error page', message: 'Incorrect details have been entered' })
                break;
                case "null": 
                return console.log({ title: 'Error page', message: null })
                break;
                case "undefined": 
                return console.log({ title: 'Error page', message: null })
                break;
                default:
                return console.log({ title: 'Error page', message: null })

        }
    }
        // console.log('Results: ', data);
    })
}

getProcessingPage([{ state: 'error', errorCode: 'NO_STOCK' }]);
getProcessingPage([{ state: 'processing' }, { state: 'error', errorCode: 'NO_STOCK' }]);
getProcessingPage([{ state: 'processing' }, { state: 'error', errorCode: 'INCORRECT_DETAILS' }]);
getProcessingPage([{ state: 'processing' }, { state: 'error' }]);
getProcessingPage([{ state: 'processing' }, { state: 'success' }]);
getProcessingPage([{ state: 'success' }]);
getProcessingPage([{ state: 'error' }]);