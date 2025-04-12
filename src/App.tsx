import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  // 翻译功能实现
  useEffect(() => {
    const translateText = async () => {
      if (!inputText) {
        setTranslatedText('');
        return;
      }

      setIsTranslating(true);
      try {
        // 使用 MyMemory Translation API（免费，无需 API key）
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          inputText
        )}&langpair=zh|en`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
          // 不再需要显式设置 mode: "cors"，因为我们已经在 manifest.json 中设置了权限
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.responseData && data.responseData.translatedText) {
          setTranslatedText(data.responseData.translatedText);
        } else {
          throw new Error(data.responseMessage || '翻译返回数据格式错误');
        }
      } catch (error) {
        console.error('翻译出错：', error);
        if (error instanceof TypeError && error.message.includes('fetch')) {
          setTranslatedText('网络连接错误，请检查网络后重试');
        } else {
          setTranslatedText('翻译服务暂时不可用，请稍后再试');
        }
      } finally {
        setIsTranslating(false);
      }
    };

    // 使用防抖，避免频繁请求
    const debounceTimer = setTimeout(translateText, 500);
    return () => clearTimeout(debounceTimer);
  }, [inputText]);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-800">
      <div className="flex-1 flex flex-col p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">中文输入</h2>
        <textarea
          className="flex-1 w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="请输入要翻译的中文文本..."
        />
      </div>

      <div className="flex-1 flex flex-col p-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">英文翻译</h2>
        <div className="flex-1 w-full p-4 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 overflow-auto">
          {isTranslating ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse text-gray-500">正在翻译...</div>
            </div>
          ) : (
            translatedText || '翻译结果将显示在这里...'
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
