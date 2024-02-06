class car{
    constructor(name,manufactur)
    {
        this.name=name;
        this.manufactur=manufactur;
    }
    ride()
    {
        console.log("hell0 i am writing",this.name);
    }
}
 const merdices=new car("mercides",20280);
 console.log(merdices.name);