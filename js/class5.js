//This and That

function usesThis(name)
{
    this.myName = name;

    function returnMe() {
        return this;
    }

    return {
        returnMe : returnMe
    }
}

function usesThat(name)
{
    var that = this;
    this.myName = name;

    function returnMe() {
        return that;
    }

    return {
        returnMe : returnMe
    }
}

var usesthat = new usesThat('Dave');
var usesthis = new usesThis('John');

//alert("UsesThat thinks it's called " + usesthat.returnMe().myName + '\r\n' +
 //     "UsesThis thinks it's called " + usesthis.returnMe().myName);

var obj = {

    clicks: 0,

    increaseClick()
    {
        this.clicks = this.clicks + 1;
    },

    decreaseClick()
    {
        this.clicks = this.clicks - 1;
    },

    doubleClicks()
    {
        let that = this;

        function doubleIncrease()
        {
            for(let i = 0; i < 2; i++)
            {
                that.increaseClick();
            }
        }

        return doubleIncrease();
    }
};
