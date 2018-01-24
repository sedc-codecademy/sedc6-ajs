$(function(){

    function Table(list){
        this.listOfSongs = list;
        this.tbody = $("#tbody");

        this.populateTable = function(sortingFunction){
            if(sortingFunction != undefined){
                this.listOfSongs = this.listOfSongs.sort(sortingFunction);
            }

            this.tbody.html("");
            this.listOfSongs.forEach(song => {
                let row = $("<tr>");
                $("<td>").text(song.rank).appendTo(row);
                $("<td>").text(song.song).appendTo(row);
                $("<td>").text(song.artist).appendTo(row);
                $("<td>").text(song.releaseYear).appendTo(row);
                $("<td>").text(song.duration).appendTo(row);
                this.tbody.append(row);
            });
        }

        this.setListOfSongs = function(songs){
            this.listOfSongs = songs;
        }
    }




    function getData(){
        
        $.ajax({
            method:"GET",
            url:"http://demo6418849.mockable.io/songs",
            success:function(data){
                console.log(data);
                table.setListOfSongs(data);
                table.populateTable();
            },
            error:function(error){
                console.log(error);
            }
        })

    }

    function sortData(e){
        let pickedValue = e.target.value;
        let sortingFunction;
        switch(pickedValue){
            case '1':
                sortingFunction = (a, b) => {
                    return parseInt(a.rank) - parseInt(b.rank);
                }
                // function(songA, songB){
                //     var rankA = parseInt(songA.rank);
                //     var rankB = parseInt(songB.rank);
                //     return rankA - rankB;
                // }
                break;
            case '2':
                sortingFunction = (a, b) => {
                    return a.song.localeCompare(b.song);
                }
                break;
            case '3':
                sortingFunction = (a, b) => {
                    return a.artist.localeCompare(b.artist);
                }
                break;
            case '4':
                sortingFunction = (a, b) => {
                    return parseInt(a.releaseYear) - parseInt(b.releaseYear)
                }
                break;
            case '5':
                sortingFunction = (a, b) => {
                    return evaluateMinutesToSeconds(a.duration) - 
                    evaluateMinutesToSeconds(b.duration)
                }
                break;
            default:
                break;
        }
        table.populateTable(sortingFunction);
    }

    function evaluateMinutesToSeconds(duration){
        let time = duration.split(":");
        return time[0] + time[1];
    }
    let table = new Table([]);
    $("#pull").on("click", getData);
    $("#sort").on("change", sortData);
});