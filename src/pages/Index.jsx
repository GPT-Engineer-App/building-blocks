import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Web Application</h1>
      <p className="text-xl mb-6">This is a minimal web application that you can modify and build upon.</p>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Placeholder for Future Content</h2>
        <p className="mb-4">You can add your own content, components, and features here.</p>
        <Button>Example Button</Button>
      </div>
    </div>
  );
};

export default Index;