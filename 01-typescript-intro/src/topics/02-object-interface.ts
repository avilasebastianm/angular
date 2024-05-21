const skill : String [] = ['bash','Counter','Heling'];
// la interface se utiliza cuando queremos definir los parametros del objeto
interface  Charater{
    name: string;
    hp: number;
    skill: string[];
    hometown: string| undefined;
}

const stride : Charater = {
    name :'stride',
    hp : 16,
    skill: ['bash','couner'],
    hometown:undefined,
};

