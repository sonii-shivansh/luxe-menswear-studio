import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedText } from "@/components/AnimatedText";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SizeGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <AnimatedText className="text-5xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
                SIZE GUIDE
              </AnimatedText>
              <p className="text-muted-foreground text-base lg:text-lg tracking-wide">
                Find your perfect fit
              </p>
            </div>

            <Tabs defaultValue="shirts" className="space-y-10">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto h-auto">
                <TabsTrigger value="shirts" className="py-4 text-sm sm:text-base tracking-wider">
                  SHIRTS
                </TabsTrigger>
                <TabsTrigger value="pants" className="py-4 text-sm sm:text-base tracking-wider">
                  PANTS
                </TabsTrigger>
                <TabsTrigger value="outerwear" className="py-4 text-sm sm:text-base tracking-wider">
                  OUTERWEAR
                </TabsTrigger>
              </TabsList>

              <TabsContent value="shirts" className="space-y-8">
                <div className="bg-card p-6 lg:p-8 luxury-shadow">
                  <h3 className="text-2xl font-light tracking-tight mb-6">Shirt Measurements</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">SIZE</th>
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">CHEST (IN)</th>
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">WAIST (IN)</th>
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">SLEEVE (IN)</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">XS</td>
                          <td className="py-4 px-4">34-36</td>
                          <td className="py-4 px-4">28-30</td>
                          <td className="py-4 px-4">32-33</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">S</td>
                          <td className="py-4 px-4">36-38</td>
                          <td className="py-4 px-4">30-32</td>
                          <td className="py-4 px-4">33-34</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">M</td>
                          <td className="py-4 px-4">38-40</td>
                          <td className="py-4 px-4">32-34</td>
                          <td className="py-4 px-4">34-35</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">L</td>
                          <td className="py-4 px-4">40-42</td>
                          <td className="py-4 px-4">34-36</td>
                          <td className="py-4 px-4">35-36</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">XL</td>
                          <td className="py-4 px-4">42-44</td>
                          <td className="py-4 px-4">36-38</td>
                          <td className="py-4 px-4">36-37</td>
                        </tr>
                        <tr className="hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">XXL</td>
                          <td className="py-4 px-4">44-46</td>
                          <td className="py-4 px-4">38-40</td>
                          <td className="py-4 px-4">37-38</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 lg:p-8 rounded-lg">
                  <h4 className="text-lg font-medium mb-4 tracking-wide">How to Measure</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Chest:</strong> Measure around the fullest part of your chest, keeping the tape measure horizontal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Sleeve:</strong> Measure from the center back neck, across the shoulder, and down to the wrist.</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="pants" className="space-y-8">
                <div className="bg-card p-6 lg:p-8 luxury-shadow">
                  <h3 className="text-2xl font-light tracking-tight mb-6">Pants Measurements</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">SIZE</th>
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">WAIST (IN)</th>
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">HIP (IN)</th>
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">INSEAM (IN)</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">28</td>
                          <td className="py-4 px-4">28-29</td>
                          <td className="py-4 px-4">36-37</td>
                          <td className="py-4 px-4">30-32</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">30</td>
                          <td className="py-4 px-4">30-31</td>
                          <td className="py-4 px-4">38-39</td>
                          <td className="py-4 px-4">30-32</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">32</td>
                          <td className="py-4 px-4">32-33</td>
                          <td className="py-4 px-4">40-41</td>
                          <td className="py-4 px-4">30-32</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">34</td>
                          <td className="py-4 px-4">34-35</td>
                          <td className="py-4 px-4">42-43</td>
                          <td className="py-4 px-4">30-32</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">36</td>
                          <td className="py-4 px-4">36-37</td>
                          <td className="py-4 px-4">44-45</td>
                          <td className="py-4 px-4">30-32</td>
                        </tr>
                        <tr className="hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">38</td>
                          <td className="py-4 px-4">38-39</td>
                          <td className="py-4 px-4">46-47</td>
                          <td className="py-4 px-4">30-32</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 lg:p-8 rounded-lg">
                  <h4 className="text-lg font-medium mb-4 tracking-wide">How to Measure</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Waist:</strong> Measure around your natural waistline where you normally wear your pants.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Hip:</strong> Measure around the fullest part of your hips.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Inseam:</strong> Measure from the crotch to the bottom of the leg.</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="outerwear" className="space-y-8">
                <div className="bg-card p-6 lg:p-8 luxury-shadow">
                  <h3 className="text-2xl font-light tracking-tight mb-6">Outerwear Measurements</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">SIZE</th>
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">CHEST (IN)</th>
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">SHOULDER (IN)</th>
                          <th className="py-4 px-4 text-sm font-medium tracking-wider">SLEEVE (IN)</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">S</td>
                          <td className="py-4 px-4">36-38</td>
                          <td className="py-4 px-4">17-17.5</td>
                          <td className="py-4 px-4">33-34</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">M</td>
                          <td className="py-4 px-4">38-40</td>
                          <td className="py-4 px-4">17.5-18</td>
                          <td className="py-4 px-4">34-35</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">L</td>
                          <td className="py-4 px-4">40-42</td>
                          <td className="py-4 px-4">18-18.5</td>
                          <td className="py-4 px-4">35-36</td>
                        </tr>
                        <tr className="border-b border-border/50 hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">XL</td>
                          <td className="py-4 px-4">42-44</td>
                          <td className="py-4 px-4">18.5-19</td>
                          <td className="py-4 px-4">36-37</td>
                        </tr>
                        <tr className="hover:bg-muted/30 luxury-transition">
                          <td className="py-4 px-4 font-medium text-foreground">XXL</td>
                          <td className="py-4 px-4">44-46</td>
                          <td className="py-4 px-4">19-19.5</td>
                          <td className="py-4 px-4">37-38</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 lg:p-8 rounded-lg">
                  <h4 className="text-lg font-medium mb-4 tracking-wide">How to Measure</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Chest:</strong> Measure around the fullest part of your chest under the arms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Shoulder:</strong> Measure from one shoulder point to the other across the back.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong className="text-foreground">Sleeve:</strong> Measure from the shoulder seam down to the wrist.</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuide;
