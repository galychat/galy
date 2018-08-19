socket.on('connect', function() {
        lstat('success', 'امورك عدله'),
        $('#tlogins button').removeAttr('disabled'),
        pending && (socket.emit('re', {
            token: token
        }),
