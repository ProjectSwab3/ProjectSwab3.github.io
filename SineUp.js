class Swab3 {
 
	// Loops to 10 and creates a file each iteration 
	public static void main(String[] args)
    {
		File f;
		for(int i=0;i<10;i++) {
			f = new File("file" + i + "(Name).html");
			f.createNewFile();
		}
    }
}