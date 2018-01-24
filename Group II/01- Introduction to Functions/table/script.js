
    $(function(){
    function TableData(list){
        this.listOfSongs = list;
        this.minMax = $('input[name="minmax"]');
        this.tbody = $("#tbody");

        this.populateTable = function(sortingFunction){
            let minMax = parseInt($('input[name="minmax"]:checked').val());
            if(sortingFunction != null){
                this.listOfSongs = this.listOfSongs.sort(sortingFunction)
            }
            if(minMax > 0){
                this.listOfSongs = this.listOfSongs.reverse();
                console.log(this.listOfSongs);
            }
            this.tbody.html("");
            this.listOfSongs.forEach(element => {
                var row = $("<tr>");
                $("<td>").text(element.rank).appendTo(row)
                $("<td>").text(element.song).appendTo(row)
                $("<td>").text(element.artist).appendTo(row)
                $("<td>").text(element.releaseYear).appendTo(row)
                $("<td>").      text(element.duration).appendTo(row)
                this.tbody.append(row);
            });

        }
        this.setListOfSongs = function(list){
            this.listOfSongs = list;
            this.populateTable();
        }
    }
    var originalList = [];
    var table = new TableData(originalList, false);
    // events
    $("#pull").on("click", getData);
    $("#sort").on("change",sortData);
    $("input[name='minmax']").on('change',function(){
        $("#sort").change();
    })



    function getData(){
        $.ajax({
            method:"GET",
            url:"http://demo6418849.mockable.io/songs",
            success:function(data){
                originalList = data;
                table.setListOfSongs(data);
            },
            error:function(error){
                console.log(error);
            }
        })
    }
    
    function sortData(e){
        var pickedValue = e.target.value;
    
        switch(pickedValue){
            case '1': // Rank
                table.populateTable((a,b) => (a.rank - b.rank));
                // var sortedByRank = originalList.sort((a,b) => (a.rank - b.rank));
                // table.setListOfSongs(sortedByRank);
                break;
            case '2': // Song Name
                table.populateTable((a, b) => a.song.localeCompare(b.song));
                // var sortedBySongName = originalList.sort((a, b) => a.song.localeCompare(b.song));
                // table.setListOfSongs(sortedBySongName);
                break;
            case '3': // Artist Name
                table.populateTable((a, b) => a.artist.localeCompare(b.artist));
                // var sortedByArtist = originalList.sort((a, b) => a.artist.localeCompare(b.artist));
                // table.setListOfSongs(sortedByArtist);
                break;
            case '4': // Release Year
                table.populateTable((a,b) => (a.releaseYear - b.releaseYear));
                // var sortedByReleaseYear = originalList.sort((a,b) => (a.releaseYear - b.releaseYear));
                // table.setListOfSongs(sortedByReleaseYear);
                break;
            case '5': // Duration
                table.populateTable((a,b) => (evaluateMinutes(a.duration) - evaluateMinutes(b.duration)));
                // var sortedByDuration = originalList.sort((a,b) => (evaluateMinutes(a.duration) - evaluateMinutes(b.duration)));
                // table.setListOfSongs(sortedByDuration);
                break;
            default:
                table.setListOfSongs(originalList);
                break;
        }
    }
    
    function evaluateMinutes(minutes){
        var minutesArray = minutes.split(":");
        return (minutesArray[0] * 60) + minutesArray[1]
    }
});

