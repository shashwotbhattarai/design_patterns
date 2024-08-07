/**
 * The Singleton class defines an `instance` getter, that lets clients access
 * the unique singleton instance.
 */
export class Singleton {
    /**
     * this instance needs to static because we need to tie this property in class level, not the instance level.
    */
  private static instance: Singleton;

   /**
    * The Singleton's constructor should always be private to prevent direct
    * construction calls with the `new` operator.
    */
   private constructor() { }

   /**
    * The static getter that controls access to the singleton instance.
    *
    * This implementation allows you to extend the Singleton class while
    * keeping just one instance of each subclass around.
    */
   public static get getInstance(): Singleton {
       if (!Singleton.instance) {
           Singleton.instance = new Singleton();
       }

       return Singleton.instance;
   }

   /**
    * Finally, any singleton can define some business logic, which can be
    * executed on its instance.
    */
   public someBusinessLogic() {
       // ...
   }
}