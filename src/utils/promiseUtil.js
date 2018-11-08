export default class PromiseUtils{
	static newPromise(func=>(resolve,reject){}){
		return new Promise((resolve,reject)=>{
			func(resolve,reject);
		});
	}
}