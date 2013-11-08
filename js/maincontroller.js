app.controller("MainController", function($scope, $http){

    $scope.selectLanguage = function(languageName) {
        $scope.lettersDefault = setLanguage(languageName)
         $scope.checkLetter()
        $scope.selectedLanguage = languageName
    }

    function setLanguage(languageName) {
        console.log('Selecting', languageName);
        var returnObject = {}
        angular.forEach($scope.languages[languageName].letters, function(letter) {
            returnObject[letter] = {'name': letter, 'default': true, 'availability': 'free', 'count': 0}
        })

        return returnObject
    }

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

        // Lists and Variables
    }

    $scope.languages = {
        'german': {
            'letters': ['ä', 'ö', 'ü', 'ß', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
            'name': 'german'
        },
        'english': {
            'letters': ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
            'name': 'english'
        },
        'french': {
            'letters': ['a', 'c', 'b', 'e', 'd', 'g', 'f', 'i', 'h', 'k', 'j', 'm', 'l', 'o', 'n', 'q', 'p', 's', 'r', 'u', 't', 'w', 'v', 'y', 'x', 'z'],
            'name': 'french'
        },
         'spanish': {
            'letters': ['á', 'é', 'í', 'ñ', 'ó', 'ú', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
            'name': 'spanish'
        }

    }

    $scope.lettersDefault = {};
    $scope.lettersUserExtended = {}
    $scope.inputLetters = ''
    $scope.uniqueLetters = ''
    $scope.overUsedLetters = []

    // Init

    $scope.selectLanguage('english')


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
});