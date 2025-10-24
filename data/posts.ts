
  import type { Post } from '../types';

  export const posts: Post[] = [
    {
      id: 1,
      title: "Bắt đầu với Vue.js: Xây dựng Giao diện Người dùng Phản ứng",
      excerpt: "Hướng dẫn toàn diện về Vue.js cho người mới bắt đầu, từ các khái niệm cốt lõi như components, directives đến cách quản lý state một cách hiệu quả.",
      content: `
        <h2>Vue.js là gì?</h2>
        <p>Vue.js là một framework JavaScript tiến bộ (progressive) để xây dựng giao diện người dùng (UI). Khác với các framework nguyên khối khác, Vue được thiết kế từ đầu để có thể áp dụng dần dần. Thư viện cốt lõi chỉ tập trung vào lớp view, và rất dễ dàng để tích hợp với các thư viện hoặc dự án hiện có.</p>
        
        <h2>Khởi tạo một ứng dụng Vue</h2>
        <p>Cách đơn giản nhất để bắt đầu là sử dụng CDN. Tuy nhiên, để xây dựng ứng dụng lớn, bạn nên dùng Vue CLI hoặc Vite.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  &lt;!-- index.html --&gt;
  &lt;div id="app"&gt;
    {{ message }}
  &lt;/div&gt;

  &lt;script src="https://unpkg.com/vue@3"&gt;&lt;/script&gt;
  &lt;script&gt;
    const { createApp } = Vue
    createApp({
      data() {
        return {
          message: 'Hello Vue!'
        }
      }
    }).mount('#app')
  &lt;/script&gt;
        </code></pre>
        
        <h2>Directives: Sức mạnh của Vue</h2>
        <p>Directives là các thuộc tính đặc biệt với tiền tố <code>v-</code>. Chúng cho phép bạn áp dụng các hành vi phản ứng lên DOM.</p>
        <ul>
          <li><strong>v-if / v-else:</strong> Render có điều kiện.</li>
          <li><strong>v-for:</strong> Render một danh sách dữ liệu.</li>
          <li><strong>v-on:</strong> Gắn các trình xử lý sự kiện (viết tắt là <code>@</code>).</li>
          <li><strong>v-bind:</strong> Ràng buộc (bind) thuộc tính HTML (viết tắt là <code>:</code>).</li>
          <li><strong>v-model:</strong> Ràng buộc hai chiều (two-way binding) trên các phần tử form.</li>
        </ul>

        <h2>Ví dụ về Component</h2>
        <p>Components là các thực thể Vue có thể tái sử dụng với tên riêng. Đây là nền tảng của các ứng dụng Vue phức tạp.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  // Component: button-counter.js
  app.component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    template: \`
      &lt;button @click="count++"&gt;
        You clicked me {{ count }} times.
      &lt;/button&gt;
    \`
  })
        </code></pre>
      `,
      tags: ["JavaScript", "Vue.js", "Frontend"],
      date: "25-07-2024",
      imageUrl: "https://picsum.photos/seed/vuejs-intro/800/600",
    },
    {
      id: 2,
      title: "Làm chủ React: Từ Component đến State Management",
      excerpt: "Khám phá sức mạnh của React qua việc tìm hiểu về JSX, components, props, state và hook. Xây dựng các ứng dụng web hiện đại và có khả năng mở rộng.",
      content: `
        <h2>React là gì?</h2>
        <p>React là một thư viện JavaScript để xây dựng giao diện người dùng. Nó cho phép lập trình viên tạo ra các UI phức tạp từ những mảnh mã nhỏ và biệt lập được gọi là "components".</p>

        <h2>JSX: JavaScript và XML</h2>
        <p>React sử dụng một phần mở rộng cú pháp gọi là JSX. Nó cho phép bạn viết mã trông giống HTML ngay trong file JavaScript. Điều này giúp việc mô tả UI trở nên trực quan hơn.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;
        </code></pre>

        <h2>Components và Props</h2>
        <p>Components là các hàm JavaScript độc lập, có thể tái sử dụng, trả về mã JSX. Chúng nhận đầu vào là một đối tượng "props" (viết tắt của properties) và trả về các phần tử React mô tả những gì sẽ xuất hiện trên màn hình.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  function Welcome(props) {
    return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
  }

  const element = &lt;Welcome name="Binh An" /&gt;;
        </code></pre>

        <h2>State và Hooks</h2>
        <p>State cho phép các component React "ghi nhớ" thông tin và thay đổi đầu ra của chúng theo thời gian. Hook <code>useState</code> là cách để thêm state vào các functional component.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  import React, { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      &lt;div&gt;
        &lt;p&gt;You clicked {count} times&lt;/p&gt;
        &lt;button onClick={() => setCount(count + 1)}&gt;
          Click me
        &lt;/button&gt;
      &lt;/div&gt;
    );
  }
        </code></pre>
      `,
      tags: ["JavaScript", "React", "Frontend"],
      date: "24-07-2024",
      imageUrl: "https://picsum.photos/seed/reactjs-intro/800/600",
    },
    {
      id: 3,
      title: "Xây dựng ứng dụng Web với Laravel",
      excerpt: "Laravel làm cho việc phát triển web trở nên thú vị. Hướng dẫn này sẽ giúp bạn hiểu về kiến trúc MVC, hệ thống routing, Blade templating engine và Eloquent ORM.",
      content: `
        <h2>Giới thiệu Laravel</h2>
        <p>Laravel là một framework PHP mã nguồn mở, miễn phí, được tạo ra bởi Taylor Otwell và dành cho việc phát triển các ứng dụng web theo kiến trúc MVC (Model-View-Controller). Laravel giúp đơn giản hóa các tác vụ web phổ biến như routing, authentication, sessions, và caching.</p>
        
        <h2>Routing</h2>
        <p>Routing trong Laravel cho phép bạn định tuyến tất cả các yêu cầu của ứng dụng đến controller xử lý tương ứng. Các route được định nghĩa trong file <code>routes/web.php</code>.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  // routes/web.php
  use App\\Http\\Controllers\\PostController;

  Route::get('/posts', [PostController::class, 'index']);
        </code></pre>

        <h2>Eloquent ORM</h2>
        <p>Eloquent là một ORM (Object-Relational Mapper) đi kèm với Laravel, giúp việc tương tác với cơ sở dữ liệu trở nên cực kỳ đơn giản. Mỗi bảng trong cơ sở dữ liệu có một "Model" tương ứng để tương tác với bảng đó.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  // app/Models/Post.php
  namespace App\\Models;

  use Illuminate\\Database\\Eloquent\\Model;

  class Post extends Model
  {
      // ...
  }

  // Lấy tất cả bài viết
  $posts = Post::all();
        </code></pre>

        <h2>Blade Templating Engine</h2>
        <p>Blade là một công cụ tạo template đơn giản nhưng mạnh mẽ. Không giống như các công cụ khác, Blade không hạn chế bạn sử dụng mã PHP thuần trong các view. Tất cả các view Blade được biên dịch thành mã PHP thuần và được cache cho đến khi chúng bị thay đổi.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  &lt;!-- resources/views/posts.blade.php --&gt;
  @extends('layouts.app')

  @section('content')
      &lt;h1&gt;All Posts&lt;/h1&gt;
      @foreach ($posts as $post)
          &lt;p&gt;{{ $post-&gt;title }}&lt;/p&gt;
      @endforeach
  @endsection
        </code></pre>
      `,
      tags: ["PHP", "Laravel", "Backend", "MVC"],
      date: "22-07-2024",
      imageUrl: "https://picsum.photos/seed/laravel-intro/800/600",
    },
    {
      id: 4,
      title: "Lập trình Backend hiệu năng cao với Golang",
      excerpt: "Tìm hiểu tại sao Golang (Go) lại là lựa chọn hàng đầu cho các hệ thống backend. Hướng dẫn xây dựng một API đơn giản với hiệu suất ấn tượng.",
      content: `
        <h2>Tại sao chọn Golang?</h2>
        <p>Go, hay Golang, là một ngôn ngữ lập trình được phát triển bởi Google. Nó nổi tiếng với sự đơn giản, hiệu suất cao, và khả năng xử lý đồng thời (concurrency) tuyệt vời thông qua Goroutines và Channels. Điều này làm cho Go trở thành một lựa chọn lý tưởng cho việc xây dựng các microservices và API tốc độ cao.</p>
        
        <h2>Xây dựng một Web Server đơn giản</h2>
        <p>Go cung cấp gói <code>net/http</code> mạnh mẽ trong thư viện chuẩn để xây dựng các máy chủ HTTP mà không cần đến framework bên ngoài.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  package main

  import (
      "fmt"
      "log"
      "net/http"
  )

  func helloHandler(w http.ResponseWriter, r *http.Request) {
      fmt.Fprintf(w, "Hello, World!")
  }

  func main() {
      http.HandleFunc("/", helloHandler)
      
      fmt.Println("Server starting on port 8080...")
      if err := http.ListenAndServe(":8080", nil); err != nil {
          log.Fatal(err)
      }
  }
        </code></pre>

        <h2>Xử lý JSON API</h2>
        <p>Việc xây dựng API trả về JSON cũng rất dễ dàng với các gói <code>encoding/json</code>.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  package main

  import (
      "encoding/json"
      "log"
      "net/http"
  )

  type Message struct {
      Text string \`json:"text"\`
  }

  func apiHandler(w http.ResponseWriter, r *http.Request) {
      message := Message{Text: "Hello from a Go API"}
      
      w.Header().Set("Content-Type", "application/json")
      json.NewEncoder(w).Encode(message)
  }

  func main() {
      http.HandleFunc("/api", apiHandler)
      
      log.Println("API server starting on port 8080...")
      log.Fatal(http.ListenAndServe(":8080", nil))
  }
        </code></pre>
      `,
      tags: ["Golang", "Backend", "API", "Performance"],
      date: "20-07-2024",
      imageUrl: "https://picsum.photos/seed/golang-backend/800/600",
    },
    {
      id: 5,
      title: "Node.js Toàn tập: Hướng dẫn và Cách sử dụng",
      excerpt: "Đi sâu vào thế giới của Node.js, từ kiến trúc bất đồng bộ, event loop, đến cách xây dựng một ứng dụng server-side hoàn chỉnh với các ví dụ thực tế.",
      content: `
        <h2>Node.js là gì?</h2>
        <p>Node.js là một môi trường chạy JavaScript phía máy chủ (server-side) được xây dựng trên engine V8 của Chrome. Nó cho phép các lập trình viên xây dựng các ứng dụng mạng có khả năng mở rộng, nhanh chóng bằng JavaScript.</p>
        
        <h2>Kiến trúc bất đồng bộ và Event Loop</h2>
        <p>Điểm mạnh nhất của Node.js là mô hình I/O không chặn (non-blocking I/O) và kiến trúc hướng sự kiện (event-driven). Thay vì chờ một tác vụ tốn thời gian (như đọc file, truy vấn database) hoàn thành, Node.js sẽ tiếp tục thực hiện các tác vụ khác. Khi tác vụ I/O hoàn tất, nó sẽ được đưa vào Event Loop và callback tương ứng sẽ được thực thi. Điều này giúp Node.js xử lý hàng ngàn kết nối đồng thời một cách hiệu quả.</p>
        
        <h2>Xây dựng một Web Server</h2>
        <p>Gói <code>http</code> có sẵn trong Node.js cho phép bạn tạo một máy chủ web một cách nhanh chóng.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\\n');
  });

  server.listen(port, hostname, () => {
    console.log(\`Server running at http://\${hostname}:\${port}/\`);
  });
        </code></pre>

        <h2>Làm việc với File System (fs)</h2>
        <p>Gói <code>fs</code> cho phép bạn tương tác với hệ thống tệp. Ví dụ sau đọc một file một cách bất đồng bộ.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  const fs = require('fs');

  fs.readFile('/path/to/file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  console.log('Reading file...'); // Dòng này sẽ in ra trước nội dung file
        </code></pre>
      `,
      tags: ["JavaScript", "NodeJS", "Backend", "Async"],
      date: "18-07-2024",
      imageUrl: "https://picsum.photos/seed/nodejs-deepdive/800/600",
    },
    {
      id: 6,
      title: "So sánh Vòng đời Component: Vue, React và Angular",
      excerpt: "Hiểu rõ vòng đời của component là chìa khóa để quản lý state và side effects. So sánh chi tiết các giai đoạn trong vòng đời của Vue, React (hooks) và Angular.",
      content: `
        <h2>Vòng đời Component là gì?</h2>
        <p>Mỗi component trong các framework frontend hiện đại đều trải qua một loạt các giai đoạn từ khi được tạo ra, cập nhật trên DOM, cho đến khi bị hủy bỏ. Việc hiểu rõ các giai đoạn này (lifecycle hooks) giúp chúng ta thực hiện các tác vụ như gọi API, dọn dẹp tài nguyên một cách chính xác.</p>

        <h2>Vue.js Lifecycle Hooks</h2>
        <p>Trong Vue 3 (Composition API), các hooks được import từ 'vue'.</p>
        <ul>
          <li><strong>onBeforeMount:</strong> Được gọi ngay trước khi component được gắn vào DOM.</li>
          <li><strong>onMounted:</strong> Được gọi sau khi component đã được gắn vào DOM. Đây là nơi lý tưởng để thực hiện các thao tác DOM hoặc gọi API.</li>
          <li><strong>onBeforeUpdate:</strong> Được gọi trước khi component cập nhật lại do state thay đổi.</li>
          <li><strong>onUpdated:</strong> Được gọi sau khi component đã cập nhật.</li>
          <li><strong>onBeforeUnmount:</strong> Được gọi trước khi component bị gỡ bỏ.</li>
          <li><strong>onUnmounted:</strong> Được gọi sau khi component đã bị gỡ bỏ. Đây là nơi để dọn dẹp (cleanup) các event listener, timers...</li>
        </ul>
        
        <h2>React Lifecycle (với Hooks)</h2>
        <p>Trong các functional component của React, hook <code>useEffect</code> xử lý hầu hết các nhu cầu về vòng đời.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto"><code>
  import React, { useState, useEffect } from 'react';

  function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
      // Tương đương onMounted
      console.log('Component has mounted');
      
      // Hàm return này tương đương onUnmounted
      return () => {
        console.log('Component will unmount. Cleanup here.');
      };
    }, []); // Mảng rỗng nghĩa là chỉ chạy một lần sau khi mount

    useEffect(() => {
      // Tương đương onUpdated (chạy mỗi khi component re-render)
      console.log('Component has updated');
    });

    return &lt;div&gt;My Component&lt;/div&gt;;
  }
        </code></pre>

        <h2>Angular Lifecycle Hooks</h2>
        <p>Angular có một bộ hooks vòng đời rõ ràng được định nghĩa trong interface mà component có thể implement.</p>
        <ul>
          <li><strong>ngOnChanges:</strong> Được gọi khi một thuộc tính <code>@Input</code> thay đổi.</li>
          <li><strong>ngOnInit:</strong> Được gọi một lần sau khi component được khởi tạo. Thường dùng để khởi tạo dữ liệu.</li>
          <li><strong>ngDoCheck:</strong> Được gọi trong mỗi chu kỳ phát hiện thay đổi.</li>
          <li><strong>ngAfterViewInit:</strong> Được gọi sau khi view của component đã được khởi tạo.</li>
          <li><strong>ngOnDestroy:</strong> Được gọi ngay trước khi component bị hủy. Dùng để dọn dẹp.</li>
        </ul>
      `,
      tags: ["Vue.js", "React", "Angular", "Lifecycle", "Frontend"],
      date: "16-07-2024",
      imageUrl: "https://picsum.photos/seed/framework-lifecycle/800/600",
    },
    {
      id: 7,
      title: "Kiến trúc Domain-Driven Design (DDD) và CQRS",
      excerpt: "Áp dụng Domain-Driven Design để xây dựng các hệ thống phức tạp, dễ bảo trì. Tìm hiểu cách mẫu kiến trúc CQRS giúp tách biệt giữa việc đọc và ghi dữ liệu.",
      content: `
        <h2>Domain-Driven Design (DDD) là gì?</h2>
        <p>DDD không phải là một công nghệ, mà là một cách tiếp cận để thiết kế phần mềm. Nó nhấn mạnh vào việc hợp tác chặt chẽ với các chuyên gia lĩnh vực (domain experts) để xây dựng một mô hình (model) phản ánh chính xác lĩnh vực kinh doanh. Mục tiêu là để giải quyết các vấn đề phức tạp bằng cách tập trung vào core domain.</p>
        
        <h3>Các khái niệm chính trong DDD:</h3>
        <ul>
          <li><strong>Ubiquitous Language:</strong> Một ngôn ngữ chung được chia sẻ bởi đội phát triển, chuyên gia lĩnh vực và các bên liên quan để loại bỏ sự mơ hồ.</li>
          <li><strong>Bounded Context:</strong> Một ranh giới rõ ràng mà trong đó một domain model cụ thể được định nghĩa và áp dụng.</li>
          <li><strong>Aggregate:</strong> Một cụm các đối tượng domain có thể được coi như một đơn vị duy nhất. Aggregate Root là thực thể chính trong cụm, và mọi tham chiếu từ bên ngoài chỉ được phép trỏ đến nó.</li>
          <li><strong>Repository:</strong> Cung cấp một giao diện để truy xuất các Aggregate từ bộ lưu trữ (database).</li>
        </ul>

        <h2>CQRS: Command Query Responsibility Segregation</h2>
        <p>CQRS là một mẫu kiến trúc tách biệt các hoạt động thay đổi trạng thái (Commands) khỏi các hoạt động truy vấn trạng thái (Queries). Thay vì có một mô hình duy nhất cho cả đọc và ghi, chúng ta có hai mô hình riêng biệt.</p>

        <h3>Lợi ích của CQRS:</h3>
        <ul>
          <li><strong>Tối ưu hóa:</strong> Mô hình đọc (Read Model) có thể được tối ưu hóa cho việc truy vấn (ví dụ: denormalized data), trong khi mô hình ghi (Write Model) tập trung vào logic nghiệp vụ và tính nhất quán.</li>
          <li><strong>Khả năng mở rộng:</strong> Có thể mở rộng quy mô của bên đọc và bên ghi một cách độc lập.</li>
          <li><strong>Bảo mật:</strong> Dễ dàng áp dụng các quyền khác nhau cho các hoạt động command và query.</li>
        </ul>
        <p>DDD và CQRS thường được sử dụng cùng nhau. DDD giúp mô hình hóa logic nghiệp vụ phức tạp ở phía ghi (Write Model), trong khi CQRS cung cấp cơ chế để tách biệt nó khỏi các nhu cầu truy vấn đa dạng ở phía đọc (Read Model).</p>
      `,
      tags: ["DDD", "CQRS", "Architecture", "Software Design"],
      date: "14-07-2024",
      imageUrl: "https://picsum.photos/seed/ddd-cqrs/800/600",
    },
    {
      id: 8,
      title: "Server-Sent Events (SSE) là gì và khi nào nên dùng?",
      excerpt: "Khám phá một giải pháp thay thế cho WebSocket để server đẩy dữ liệu đến client một cách hiệu quả qua kết nối HTTP.",
      content: "<p>Nội dung chi tiết về Server-Sent Events...</p>",
      tags: ["JavaScript", "NodeJS", "SSE"],
      date: "01-07-2024",
      imageUrl: "https://picsum.photos/seed/js-sse/800/600",
    },
    {
      id: 9,
      title: "So sánh hiệu năng giữa TCP và UDP",
      excerpt: "TCP đảm bảo độ tin cậy, UDP ưu tiên tốc độ. Phân tích sâu về sự khác biệt, ưu nhược điểm và các trường hợp sử dụng của hai giao thức.",
      content: "<p>Nội dung chi tiết về so sánh TCP và UDP...</p>",
      tags: ["Networking", "TCP", "UDP", "Concept"],
      date: "28-06-2024",
      imageUrl: "https://picsum.photos/seed/tcp-udp/800/600",
    }
  ];
