app.controller("MainController", function($scope, $http){
    
    $scope.lettersDefault = {
        'a': {'name': 'a', 'default': true, 'availability': 'free', 'count': 0},
        'b': {'name': 'b', 'default': true, 'availability': 'free', 'count': 0},
        'c': {'name': 'c', 'default': true, 'availability': 'free', 'count': 0},
        'd': {'name': 'd', 'default': true, 'availability': 'free', 'count': 0},
        'e': {'name': 'e', 'default': true, 'availability': 'free', 'count': 0},
        'f': {'name': 'f', 'default': true, 'availability': 'free', 'count': 0},
        'g': {'name': 'g', 'default': true, 'availability': 'free', 'count': 0},
        'h': {'name': 'h', 'default': true, 'availability': 'free', 'count': 0},
        'i': {'name': 'i', 'default': true, 'availability': 'free', 'count': 0},
        'j': {'name': 'j', 'default': true, 'availability': 'free', 'count': 0},
        'k': {'name': 'k', 'default': true, 'availability': 'free', 'count': 0},
        'l': {'name': 'l', 'default': true, 'availability': 'free', 'count': 0},
        'm': {'name': 'm', 'default': true, 'availability': 'free', 'count': 0},
        'n': {'name': 'n', 'default': true, 'availability': 'free', 'count': 0},
        'o': {'name': 'o', 'default': true, 'availability': 'free', 'count': 0},
        'p': {'name': 'p', 'default': true, 'availability': 'free', 'count': 0},
        'q': {'name': 'q', 'default': true, 'availability': 'free', 'count': 0},
        'r': {'name': 'r', 'default': true, 'availability': 'free', 'count': 0},
        's': {'name': 's', 'default': true, 'availability': 'free', 'count': 0},
        't': {'name': 't', 'default': true, 'availability': 'free', 'count': 0},
        'u': {'name': 'u', 'default': true, 'availability': 'free', 'count': 0},
        'v': {'name': 'v', 'default': true, 'availability': 'free', 'count': 0},
        'w': {'name': 'w', 'default': true, 'availability': 'free', 'count': 0},
        'x': {'name': 'x', 'default': true, 'availability': 'free', 'count': 0},
        'y': {'name': 'y', 'default': true, 'availability': 'free', 'count': 0},
        'z': {'name': 'z', 'default': true, 'availability': 'free', 'count': 0}
    };

    $scope.letters = $scope.lettersDefault
    $scope.lettersUserExtended = {}
    $scope.inputLetters = ''
    $scope.uniqueLetters = ''
    $scope.overUsedLetters = []

    function resetLetterJSON() {
        $scope.letters = $scope.lettersDefault

        // angular.forEach($scope.lettersUserExtended, function(letterObject) {
        //     $scope.letters.letterObject['name'] = $scope.lettersUserExtended[thisLetter]
        // })

        angular.forEach($scope.letters, function(letterObject) {
            letterObject.count = 0
            letterObject.availability = 'free'
        });


    }

    $scope.checkLetter = function() {
        resetLetterJSON()

        angular.forEach($scope.inputLetters, function(thisLetter) {
            // Make lowercase
            thisLetter = thisLetter.toLowerCase()

            // If this is not a default letter add it to the letterJSON
            if (!(thisLetter in $scope.letters)) {
                $scope.lettersUserExtended[thisLetter] = {'name': thisLetter, 'default': false, 'availability': 'free', 'count': 0}
                $scope.letters[thisLetter] = $scope.lettersUserExtended[thisLetter]
            }

            // Check if this letter is already used
            var alreadyUsed = $.inArray(thisLetter, $scope.uniqueLetters) > -1;
            if (alreadyUsed == false) {
                $scope.uniqueLetters += thisLetter
            }
            
            // Count letters
            $scope.letters[thisLetter].count++

            if ($scope.letters[thisLetter].count == 1) {
                $scope.letters[thisLetter].availability = 'used'
            }

            if ($scope.letters[thisLetter].count > 1) {
                $scope.letters[thisLetter].availability = 'overused'
            }
        });


        // ----------------------------------------------------------------------------
        // ???? -- Do I need this stuff?

        // if ($scope.inputLetters >= $scope.uniqueLetters) {
        //     // Something is added to the input field
        //     console.log('add');
        //     $scope.uniqueLetters = $scope.usedLetters
        // } else {
        //     // Something is delted from the input field
        //     console.log('delete');
        // }



        // var getLastLetter = $scope.inputLetters.substr($scope.inputLetters.length - 1)
        // var lastLetter = $scope.letters[getLastLetter]

        // // Count letters
        // // ! - Add functionality to reduce Count when letter is deleted
        // lastLetter.count++

        // if ( lastLetter.availability == 'free') {
        //     lastLetter.availability = 'used'
        // } else {
        //     lastLetter.availability = 'overused'
        // }
        // console.log(lastLetter);
    }
});